import SearchItemsSection from "./Common/SearchItemsSection";
import SideBarFilter from "./Common/SideBarFilter";

const Main = ({ url }) => {
  return (
    <div className="container">
      <h1>SpacEx Launch programs</h1>
      <div className="row">
        <SideBarFilter className="col-sm-4" />
        <SearchItemsSection className="col-sm-8 search-section d-flex" />
      </div>
    </div>
  );
};
export default Main;
