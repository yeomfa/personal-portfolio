import Button from '@/components/common/Button';
import { Profile, Section } from '@/types/Sections';
import smoothScroll from '@/utils/smoothScroll';
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  ArrowDownIcon,
} from '@phosphor-icons/react';

export default function HeroButtons() {
  return (
    <div className="flex items-center gap-4">
      {/* GitHub */}
      <Button href={Profile.GitHub} external circle>
        <GithubLogoIcon weight="bold" />
      </Button>

      {/* LinkedIn */}
      <Button href={Profile.LinkedIn} external circle>
        <LinkedinLogoIcon weight="bold" />
      </Button>

      {/* Scroll Button */}
      <Button
        onClick={() => smoothScroll(Section.AboutMe)}
        className={`
          border-primary text-primary px-3 hover:bg-primary hover:text-white dark:bg-gradient-to-l from-transparent to-primary/10
        `}
      >
        <ArrowDownIcon weight="bold" />
        <span className="ml-2">About me</span>
      </Button>
    </div>
  );
}
