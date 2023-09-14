import { Paper, Tabs, Tab } from "@mui/material";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

interface NavbarProps {}

const tabs = [
  {
    route: "/",
    label: "Currencies",
    value: "currencies",
  },
  {
    route: "/volume",
    label: "Trending Against Volume",
    value: "volume",
  },
  {
    route: "/global",
    label: "Global Market Information",
    value: "global",
  },
];

export const Navbar: FC<NavbarProps> = () => {
  const [tab, setTab] = useState<number>(0);
  const router = useRouter();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
    const tab = tabs[newValue];
    router.push(tab.route);
  };

  useEffect(() => {
    const tabIndex = tabs.findIndex((tab) => tab.route === router.pathname);

    if (tabIndex !== -1) {
      setTab(tabIndex);
    }
  }, [router.pathname]);

  return (
    <Paper sx={{ width: "100%", my: 2 }}>
      <Tabs value={tab} onChange={handleTabChange}>
        {tabs.map((tab) => (
          <Tab label={tab.label} key={tab.value} />
        ))}
      </Tabs>
    </Paper>
  );
};
