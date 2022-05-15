import Card from "./Card";

import { useSelector } from "react-redux";

const SearchItemsSection = ({ className: classes }) => {
  const { item: searchItems, loading: isLoading } = useSelector(
    (state) => state.searchData
  );

  return (
    <section className={classes}>
      {isLoading ? (
        <Card className="card-placeholder">
          <img src="/loader1.gif" width="200px" />
        </Card>
      ) : (
        <>
          {!searchItems || searchItems.length == 0 ? (
            <Card className="card-placeholder">No Data</Card>
          ) : (
            <div className="row">
              {searchItems.map((item) => {
                return (
                  <div
                    key={item.launch_date_unix}
                    className="col-lg-4 col-xs-12 d-flex col-sm-6"
                  >
                    <Card className="launchCard">
                      <div className="launchImg">
                        <img src={item.links.mission_patch_small} alt="" />
                      </div>
                      <div className="launchTitle">
                        {item.mission_name} #{item.flight_number}
                      </div>
                      <p>Mission Ids: {item.mission_id}</p>
                      <p>Launch Year: {item.launch_year}</p>
                      <p>Successfull Launch: {item.launch_success}</p>
                    </Card>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default SearchItemsSection;
