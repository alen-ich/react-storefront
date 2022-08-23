import clsx from "clsx";
// import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

import { getLinkPath } from "@/lib/menus";
// import { usePaths } from "@/lib/paths";
import { useFooterMenuQuery } from "@/saleor/api";

import { Box } from "../Box";
// import { ChannelDropdown } from "../regionDropdowns/ChannelDropdown";
// import { LocaleDropdown } from "../regionDropdowns/LocaleDropdown";
import { IconButton } from "../CheckoutLineItem/IconButton";
import { useRegions } from "../RegionsProvider";
import styles from "./Footer.module.css";

export type FooterProps = HTMLAttributes<HTMLElement>;

// Saleor Cloud currently doesn't support relative URLs in the footer.
// This is a workaround to make the links work.
// @todo remove this when the issue is fixed.
const fixMenuItemLocalhostUrl = (url: string) => url.replace(/^https?:\/\/localhost:8000\//, "/");

export const Footer = ({ className, ...rest }: FooterProps) => {
  // const paths = usePaths();
  const { query, currentChannel, currentLocale } = useRegions();

  const { data, error } = useFooterMenuQuery({ variables: { ...query } });

  if (error) {
    console.error("Footer component error", error.message);
  }

  const menu = data?.menu?.items || [];

  return (
    <footer className={clsx(styles.footer, className)} {...rest}>
      <Box className={styles["footer-inner"]}>
        <div className="flex mb-14 sm:mb-10">
          {/* <Link href={paths.$url()} passHref>
            <a href="pass" className="hidden sm:inline-block">
              <div className="mt-px group block h-16 w-28 relative grayscale">
                <Image src="/saleor.svg" alt="Saleor logo" layout="fill" />
              </div>
            </a>
          </Link> */}
          <div className="grid grid-cols-2 gap-[2rem] w-full sm:w-auto sm:flex sm:flex-wrap sm:justify-end sm:ml-auto">
            {menu.map((item) => (
              <div className="sm:ml-14" key={item?.id}>
                {item?.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles["menu-heading"]}
                  >
                    {item?.name}
                  </a>
                ) : (
                  <Link href={getLinkPath(item!, currentChannel.slug, currentLocale)} passHref>
                    <a href="pass" className={styles["menu-heading"]}>
                      {item?.name}
                    </a>
                  </Link>
                )}
                <ul className={styles.menu}>
                  {item?.children?.map((sub) => (
                    <li key={sub?.id}>
                      {sub?.url ? (
                        <a
                          href={fixMenuItemLocalhostUrl(sub.url)}
                          target="_blank"
                          rel="noreferrer"
                          className={styles["menu-link"]}
                          data-testid={`footerExternalLinks${sub?.name}`}
                        >
                          {sub?.name}
                        </a>
                      ) : (
                        <Link href={getLinkPath(sub!, currentChannel.slug, currentLocale)} passHref>
                          <a
                            href="pass"
                            className={styles["menu-link"]}
                            data-testid={`footerInternalLinks${sub?.name}`}
                          >
                            {sub?.name}
                          </a>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="https://www.instagram.com/bibotta.studio/" passHref>
            <a href="pass" className="hidden xs:flex" target="_blank">
              <IconButton
                variant="bare"
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 5.6875C9.14707 5.6875 8.31329 5.94042 7.6041 6.41429C6.89492 6.88815 6.34217 7.56167 6.01577 8.34968C5.68937 9.13768 5.60397 10.0048 5.77036 10.8413C5.93676 11.6779 6.34749 12.4463 6.9506 13.0494C7.55372 13.6525 8.32213 14.0632 9.15867 14.2296C9.99522 14.396 10.8623 14.3106 11.6503 13.9842C12.4383 13.6578 13.1118 13.1051 13.5857 12.3959C14.0596 11.6867 14.3125 10.8529 14.3125 10C14.3125 8.85625 13.8581 7.75935 13.0494 6.9506C12.2406 6.14185 11.1437 5.6875 10 5.6875ZM10 13.1875C9.36957 13.1875 8.7533 13.0006 8.22912 12.6503C7.70494 12.3001 7.29639 11.8022 7.05513 11.2198C6.81388 10.6374 6.75076 9.99646 6.87375 9.37815C6.99674 8.75984 7.30032 8.19188 7.7461 7.7461C8.19188 7.30032 8.75984 6.99674 9.37815 6.87375C9.99646 6.75076 10.6374 6.81388 11.2198 7.05513C11.8022 7.29639 12.3001 7.70494 12.6503 8.22912C13.0006 8.7533 13.1875 9.36957 13.1875 10C13.185 10.8446 12.8484 11.6539 12.2512 12.2512C11.6539 12.8484 10.8446 13.185 10 13.1875ZM14.125 0.8125H5.875C4.53234 0.8125 3.24467 1.34587 2.29527 2.29527C1.34587 3.24467 0.8125 4.53234 0.8125 5.875V14.125C0.8125 15.4677 1.34587 16.7553 2.29527 17.7047C3.24467 18.6541 4.53234 19.1875 5.875 19.1875H14.125C15.4677 19.1875 16.7553 18.6541 17.7047 17.7047C18.6541 16.7553 19.1875 15.4677 19.1875 14.125V5.875C19.1875 4.53234 18.6541 3.24467 17.7047 2.29527C16.7553 1.34587 15.4677 0.8125 14.125 0.8125ZM18.0625 14.125C18.0625 15.1693 17.6477 16.1708 16.9092 16.9092C16.1708 17.6477 15.1693 18.0625 14.125 18.0625H5.875C4.83071 18.0625 3.82919 17.6477 3.09077 16.9092C2.35234 16.1708 1.9375 15.1693 1.9375 14.125V5.875C1.9375 4.83071 2.35234 3.82919 3.09077 3.09077C3.82919 2.35234 4.83071 1.9375 5.875 1.9375H14.125C15.1693 1.9375 16.1708 2.35234 16.9092 3.09077C17.6477 3.82919 18.0625 4.83071 18.0625 5.875V14.125ZM15.8125 5.125C15.8125 5.31042 15.7575 5.49168 15.6545 5.64585C15.5515 5.80002 15.4051 5.92018 15.2338 5.99114C15.0625 6.06209 14.874 6.08066 14.6921 6.04449C14.5102 6.00831 14.3432 5.91902 14.2121 5.78791C14.081 5.6568 13.9917 5.48975 13.9555 5.3079C13.9193 5.12604 13.9379 4.93754 14.0089 4.76623C14.0798 4.59493 14.2 4.44851 14.3542 4.3455C14.5083 4.24248 14.6896 4.1875 14.875 4.1875C15.1236 4.1875 15.3621 4.28627 15.5379 4.46209C15.7137 4.6379 15.8125 4.87636 15.8125 5.125Z"
                      fill="#484848"
                    />
                  </svg>
                }
              />
            </a>
          </Link>
          <p className="text-sm text-main-3 flex-grow">
            © Copyright {new Date().getFullYear()} Bibotta Studio
          </p>
          {/* <div className="invisible md:visible flex gap-4">
            <ChannelDropdown horizontalAlignment="right" />
            <LocaleDropdown horizontalAlignment="right" />
          </div> */}
        </div>
      </Box>
    </footer>
  );
};

export default Footer;
