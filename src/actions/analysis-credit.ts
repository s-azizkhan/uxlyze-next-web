import { DEFAULT_FREE_CREDIT, REPORT_CREDIT_COST } from "@/config/app.config";
import { createSysConfig, getSysConfig } from "@/config/sys.config";
import { db } from "@/db";
import { analysisCreditsTable, analysisCreditUsageTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function giveCreditToRegisteredUser(userId: string) {
  try {
    // check if user already has credit
    const userCredit = await db.query.analysisCreditsTable.findFirst({
      where: eq(analysisCreditsTable.userId, userId),
    });
    if (userCredit) {
      console.log("User already has credit:", userId);
      return;
    }

    const freeCredit = await getSysConfig("free_signup_credit");
    if (!freeCredit) {
      console.log("Free credit not set, using default:", DEFAULT_FREE_CREDIT);
      await createSysConfig(
        "free_signup_credit",
        DEFAULT_FREE_CREDIT.toString()
      );
    }
    await db.insert(analysisCreditsTable).values({
      userId,
      balance: freeCredit?.value
        ? parseInt(freeCredit.value)
        : DEFAULT_FREE_CREDIT,
    });
    console.log("Credit given to registered user:", userId);
  } catch (error) {
    console.error("Error giving credit to registered user:", error);
    // throw error;
  }
}

export async function getUserCredit(userId: string) {
  try {
    const userCredit = await db.query.analysisCreditsTable.findFirst({
      where: eq(analysisCreditsTable.userId, userId),
    });
    return userCredit;
  } catch (error) {
    console.error("getUserCredit: Error getting user credit:", error);
    throw error;
  }
}

export const calculateCreditCost = (config: {
  includePreview: boolean;
  includePSI: boolean;
  includeAIAnalysis: boolean;
}) => {
  let cost = REPORT_CREDIT_COST.DEFAULT;
  if (config.includePreview) {
    cost += REPORT_CREDIT_COST.INCLUDE_PREVIEW;
  }
  if (config.includePSI) {
    cost += REPORT_CREDIT_COST.INCLUDE_PSI;
  }
  if (config.includeAIAnalysis) {
    cost += REPORT_CREDIT_COST.INCLUDE_AI_ANALYSIS;
  }
  return cost;
};

export async function deductCreditForReport(
  userId: string,
  reportId: string,
  reportCost: number
) {
  try {
    const userCredit = await getUserCredit(userId);
    if (!userCredit) {
      console.log("User does not have credit while deducting:", userId);
      return;
    }
    if (userCredit.balance < reportCost) {
      console.log("User does not have enough credit while deducting:", userId);
      return;
    }

    await db.insert(analysisCreditUsageTable).values({
      analysisCreditId: userCredit.id,
      usedBy: userId,
      reportId,
      amount: reportCost,
    });

    const newBalance = userCredit.balance - reportCost;

    await db
      .update(analysisCreditsTable)
      .set({
        balance: newBalance,
      })
      .where(eq(analysisCreditsTable.userId, userId));
  } catch (error) {
    console.error(
      "deductCreditForReport: Error deducting credit for report:",
      error
    );
    // throw error;
  }
}
