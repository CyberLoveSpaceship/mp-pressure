import "./RepResults.css";

import useLocale from "~/use-locale";

export default function RepResults(
  /** @type {{ data: unknown[] }} */ { data },
) {
  const l = useLocale();

  return (
    <div>
      <ul id="resultsGrid">
        {data.length > 0 ? (
          data.map((rep, index) => <RepCard rep={rep} key={index} />)
        ) : (
          <li>{l("no-rep-result")}</li>
        )}
      </ul>
    </div>
  );
}

function RepCard({ rep }) {
  const none = "N/A";

  // some reps have multiple offices, with "legislature" giving basic info like "House of Commons, Ottawa" for an address
  // this makes sure to get to more specific address/contact more likely to respond
  const hasOffice = rep.offices && rep.offices.length > 0;
  const mainOffice =
    rep.offices?.find(
      (office) => office.type && office.type === "constituency",
    ) || rep.offices[0];

  const name = rep.name;
  const title = rep.elected_office || none;
  const district = rep.district_name || none;
  const party = rep.party_name || none;
  const email = rep.email.toLowerCase() || none;
  const phones = hasOffice ? rep.offices?.map((office) => office.tel) : [];
  const address = hasOffice ? mainOffice.postal : none;

  return (
    <li className="repCard">
      <div className="repHeader">
        <div className="repName">{name}</div>
        <div className="repDetails">
          {title}, {district}
        </div>
        <div className="repParty">{party}</div>
      </div>
      <div className="repContact">
        <span className="icon">P </span>
        <div className="repPhone">
          {phones.length === 0
            ? none
            : phones.map((phone) => (
                <a key={phone} href={`tel:${phone}`}>
                  {phone}
                </a>
              ))}
        </div>
        <span className="icon">E </span>
        <div className="email">
          <a href="">{email}</a>
        </div>
        <span className="icon">A </span>
        <div className="address">{address}</div>
      </div>
    </li>
  );
}
