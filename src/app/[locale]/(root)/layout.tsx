interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mt-20 flex min-h-screen justify-center">{children}</div>
  );
}
