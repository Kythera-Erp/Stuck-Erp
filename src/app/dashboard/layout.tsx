import Link from "next/link";
import Header from "@components/layout/Header/Header";
import "@styles/globals.css";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main className="content">{children}</main>
    </div>
  );
}
