const EmployeeLayout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <nav>Employee Navigation</nav>
    <div>{children}</div>
  </div>
);

export default EmployeeLayout;
