import DashboardS1 from "./DashboardS1";
import DashboardS2 from "./DashboardS2";
import DashboardS3 from "./DashboardS3";



const DashboardTwo = () => {
    return (
        <div>
            {/* first section  */}
            <DashboardS1 ></DashboardS1>
            {/* second section with chat  */}
             <DashboardS2 ></DashboardS2>
            {/* third section  */}
            <DashboardS3></DashboardS3>
        </div>
    );
};

export default DashboardTwo;