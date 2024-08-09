import AdminSidebar from "../Components/AdminSidebar"
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userpic.png"
import '../Styles/_dashboard.scss'

function Dashboard() {
  return (
    <div className="adminContainer">
      {/* sidebar */}
      <AdminSidebar/>
      {/* Main */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch/>
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell/>
          <img src={userImg}/>
        </div>
      </main>

    </div>
  )
}

export default Dashboard