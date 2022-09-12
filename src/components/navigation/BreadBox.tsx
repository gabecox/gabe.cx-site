import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Flex,
  FlexProps,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export type BreadBoxProps = {
  links?: {
    title: string;
    href: string;
    divider?: boolean;
  }[];
  variant?: "incremental" | any;
};

export const BreadBox: React.FC<BreadBoxProps & FlexProps> = ({
  links = [{ title: "links", href: "#", divider: false }],
  variant = "set",
  ...props
}) => {
  const router = useRouter();
  let crumbs = router.pathname.split("/");
  crumbs[1] === "" ? (crumbs = ["gabe.cx"]) : (crumbs[0] = "gabe.cx");

  return (
    <>
      <Flex {...props}>
        {variant === "incremental" ? (
          <Breadcrumb>
            {crumbs?.map((crumb, i) => (
              <BreadcrumbItem key={i}>
                <NextLink
                  href={i === 0 ? "/" : "/" + crumbs.slice(1, i + 1).join("/")}>
                  <BreadcrumbLink as={Link}>{crumb}</BreadcrumbLink>
                </NextLink>
              </BreadcrumbItem>
            ))}
            <BreadcrumbSeparator />
          </Breadcrumb>
        ) : (
          <Breadcrumb separator="|">
            {links.map((link, i) => (
              <BreadcrumbItem key={i}>
                <NextLink href={link.href} passHref>
                  <BreadcrumbLink
                    color={
                      crumbs[crumbs.length - 1] === link.title
                        ? "active"
                        : "text"
                    }>
                    {link.title}
                  </BreadcrumbLink>
                </NextLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        )}
      </Flex>
    </>
  );
};
