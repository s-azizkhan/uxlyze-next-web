import { Book, Menu, Sunset, User2Icon, Zap } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { AiImageIcon } from "hugeicons-react";
import { APP_NAME } from "@/config/app.config";

const navbarContent = {
  appName: APP_NAME,
  mainLinks: [
    { title: "Features", href: "/features" },
    { title: "Pricing", href: "/pricing" },
    { title: "Blog", href: "/blogs" },
  ],
  resourcesMenu: [
    {
      title: "Help Center",
      description: "Get all the answers you need right here",
      icon: <Zap className="size-5 shrink-0" />,
      href: "/help-center",
    },
    {
      title: "Contact Us",
      description: "We are here to help you with any questions you have",
      icon: <Sunset className="size-5 shrink-0" />,
      href: "/contact",
    },
    {
      title: "Terms of Service",
      description: "Our terms and conditions for using our services",
      icon: <Book className="size-5 shrink-0" />,
      href: "#",
    },
  ],
  ctaButton: {
    text: "Generate Menu",
    href: "/register",
    icon: <AiImageIcon className="size-4 ml-2" />,
  },
  mobileMenuFooter: [
    { title: "Press", href: "#" },
    { title: "Contact", href: "/contact" },
    { title: "Imprint", href: "#" },
    { title: "Sitemap", href: "#" },
  ],
  loginButton: {
    text: "Log in",
    href: "/sign-in",
    icon: <User2Icon className="size-4 ml-2" />,
  },
};

const DesktopNavigation = () => {
  return (
    <nav className="hidden w-full items-center justify-between lg:flex">
      {/* Logo and Links */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            {/* TODO: add logo */}
            <span className="text-xl font-bold">{navbarContent.appName}</span>
          </div>
        </Link>
      </div>
      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          {navbarContent.mainLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={cn(
                "text-muted-foreground",
                navigationMenuTriggerStyle,
                buttonVariants({ variant: "ghost" })
              )}
            >
              {link.title}
            </Link>
          ))}
          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              {/* Resources Menu */}
              <NavigationMenuItem className="text-muted-foreground">
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-80 p-3">
                    {navbarContent.resourcesMenu.map((item, idx) => (
                      <li key={idx}>
                        <NavigationMenuLink
                          href={item.href}
                          className={cn(
                            "flex items-start gap-4 rounded-md p-3 transition hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          )}
                        >
                          {item.icon}
                          <div>
                            <div className="text-sm font-semibold">
                              {item.title}
                            </div>
                            <p className="text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Link href={navbarContent.ctaButton.href}>
          <Button>
            <span>{navbarContent.ctaButton.text}</span>
            {navbarContent.ctaButton.icon}
          </Button>
        </Link>
        {/* Mode Toggle */}
        <ModeToggle />
      </div>
    </nav>
  );
};

const MobileNavigation = () => {
  return (
    <div className="flex w-full items-center justify-between lg:hidden">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2">
          {/* TODO: add logo */}
          <span className="text-xl font-bold">{navbarContent.appName}</span>
        </div>
      </Link>
      <Link href={navbarContent.ctaButton.href}>
        <Button>
          <span>{navbarContent.ctaButton.text}</span>
          {navbarContent.ctaButton.icon}
        </Button>
      </Link>
      {/* Mobile Menu Button */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle>
              <Link href="/">
                <div className="flex items-center gap-2">
                  {/* TODO: add logo */}
                  <span className="text-xl font-bold">
                    {navbarContent.appName}
                  </span>
                </div>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="mb-8 mt-8 flex flex-col gap-4">
            <a href="#" className="font-semibold">
              Home
            </a>
            {/* Accordion for Resources */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="resources" className="border-b-0">
                <AccordionTrigger className="py-0 font-semibold hover:no-underline bg-transparent">
                  Resources
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                  {navbarContent.resourcesMenu.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className={cn(
                        "flex items-start gap-4 rounded-md p-3 transition hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      )}
                    >
                      {item.icon}
                      <div>
                        <div className="text-sm font-semibold">
                          {item.title}
                        </div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {navbarContent.mainLinks.map((link, index) => (
              <a key={index} href={link.href} className="font-semibold">
                {link.title}
              </a>
            ))}
          </div>
          {/* Footer Links and Buttons */}
          <div className="border-t pt-4">
            <div className="grid grid-cols-2 gap-4">
              {navbarContent.mobileMenuFooter.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "justify-start text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="mt-2 flex flex-col gap-3">
              <Link href={navbarContent.ctaButton.href}>
                <Button>
                  <span>{navbarContent.ctaButton.text}</span>
                  {navbarContent.ctaButton.icon}
                </Button>
              </Link>
              <Link href={navbarContent.loginButton.href}>
                <Button variant="outline">
                  {navbarContent.loginButton.text}{" "}
                  {navbarContent.loginButton.icon}
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default function PageNavbar() {
  return (
    <>
      <header className="h-16 sticky lg:top-5 top-0 z-50 w-full">
        <div className="lg:container h-full items-center justify-around w-full border-border/40">
          <div className="flex px-2 lg:px-10 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 w-full h-full lg:rounded-3xl">
            {/* Desktop Navigation */}
            <DesktopNavigation />
            {/* Mobile Navigation */}
            <MobileNavigation />
          </div>
        </div>
      </header>
    </>
  );
}
