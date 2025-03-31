import UserNav from "../components/UserNav";
import ContactTable from "../components/ContactTable";

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <UserNav className="user-nav" />
      <div className="panel-content">
        <h1 className="panel-heading">Admin Panel</h1>
        <ContactTable />
      </div>
    </div>
  );
};

export default AdminPanel;