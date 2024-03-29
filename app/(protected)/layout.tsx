
import { Sidebar } from "./dashboard/_components/sidebar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto flex justify-center items-center">
          <div className="text-left">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default ProtectedLayout;
