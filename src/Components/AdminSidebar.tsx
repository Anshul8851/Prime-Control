import { IconType } from "react-icons";
import { Link, Location, useLocation } from "react-router-dom";
import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";


function AdminSidebar() {
    const location = useLocation();
  return (
    <aside>
        <h2>Logo.</h2>
        
        <div>
            <h5>Dashboard</h5>
            <ul>
                <Li url="/admin/dashboard" location={location} text="Dashboard" Icon={RiDashboardFill} />
                <Li url="/admin/product" location={location} text="Products" Icon={RiShoppingBag3Fill} />
                <Li url="/admin/customer" location={location} text="Customers" Icon={IoIosPeople} />
                <Li url="/admin/transaction" location={location} text="Transactions" Icon={AiFillFileText} />
            </ul>
        </div>
        <div>
            <h5>Charts</h5>
            <ul>
                <Li url="/admin/chart/bar" location={location} text="Bar" Icon={FaChartBar} />
                <Li url="/admin/chart/pie" location={location} text="Pie" Icon={FaChartPie} />
                <Li url="/admin/chart/line" location={location} text="Line" Icon={FaChartLine} />
            </ul>
        </div>
        <div>
            <h5>Apps</h5>
            <ul>
                <Li url="/admin/app/stopwatch" location={location} text="Stopwatch" Icon={FaStopwatch} />
                <Li url="/admin/app/coupon" location={location} text="Coupon" Icon={RiCoupon3Fill} />
                <Li url="/admin/app/toss" location={location} text="Toss" Icon={FaGamepad} />
            </ul>
        </div>
    </aside>
  )
}

interface LIProps{
    url:string;
    text:string;
    location:Location;
    Icon:IconType
}

const Li = ({url,text,location,Icon}:LIProps)=>(
    <li
       style={{
        backgroundColor:location.pathname.includes(url)?"rgba(0,115,255,0.1)": "white",
       }}
    >
        <Link
         to={url}
         style={{
            color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
          }}
        >
            <Icon/>
            {text}
        </Link>
    </li>
)

export default AdminSidebar