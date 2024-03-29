import { Profile } from "./profile";
import LocaleSwitcher from "@/components/locale-switcher";
import LocalizedLink from "./localized-link";
import ThemeSwitcher from "./theme-switcher";

export function NavBar() {
  return (
    <div className="sticky top-0 p-4 dark:bg-[#1e1e1e] bg-neutral-200 border-neutral-400 dark:border-gray-600 border-solid border-b-2">
      <div className="flex flex-row justify-between">
        {" "}
        <LocalizedLink
          href="/"
          className="group flex w-full items-center gap-x-2.5"
        >
          <div className="rounded-full border border-white/30 group-hover:border-white/50">
            <Profile width={40} />
          </div>

          <h3 className="font-semibold tracking-wide group-hover:text-gray-50 text-sm md:text-base">
            Tadeo Javier Cocucci
          </h3>
        </LocalizedLink>
        <div className="flex flex-row space-x-6 align-middle">
          <ThemeSwitcher />
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
}
