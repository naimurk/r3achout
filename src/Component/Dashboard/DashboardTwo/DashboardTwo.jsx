import DashboardS1 from "./DashboardS1";
import DashboardS2 from "./DashboardS2";



const DashboardTwo = () => {
    return (
        <div>
            {/* first section  */}
            <DashboardS1></DashboardS1>
            {/* second section with chat  */}
             <DashboardS2></DashboardS2>
            {/* third section  */}
        </div>
    );
};

export default DashboardTwo;