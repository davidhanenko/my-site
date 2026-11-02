import clsx from 'clsx';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import { site } from '@/content/site';

const links = [
  {
    label: 'LinkedIn',
    href: site.links.linkedin,
    Icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    href: site.links.github,
    Icon: FaGithub,
  },
  {
    label: 'Email',
    href: `mailto:${site.email}`,
    Icon: MdEmail,
  },
];

export function MediaLinks({
  className,
}: {
  className?: string;
}) {
  return (
    <ul
      className={clsx(
        'flex items-center gap-3 text-3xl',
        className,
      )}
    >
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={
              href.startsWith('mailto:')
                ? undefined
                : '_blank'
            }
            rel='noopener noreferrer'
            aria-label={label}
            data-tooltip={label}
            className='group relative block after:absolute after:top-7.5 after:right-7.5 after:hidden after:bg-muted after:px-2.5 after:py-1 after:text-xs after:text-light after:content-[attr(data-tooltip)] hover:after:block pointer-coarse:after:hidden'
          >
            <Icon className='my-1 p-0.5 text-white transition-all duration-350 group-hover:scale-120 group-hover:text-light group-active:scale-107' />
          </a>
        </li>
      ))}
    </ul>
  );
}
