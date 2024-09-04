import PageFooter from "@/components/shared/page-footer";
import PageNavbar from "@/components/shared/page-navbar";

export default function NoAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,_hsla(0,0%,100%,0)_0,rgb(183_180_238/50%)_100%)] dark:rotate-0 dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <PageNavbar />
      <main>{children}</main>
      <PageFooter />
    </>
  );
}
