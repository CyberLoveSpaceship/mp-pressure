export default function RepresentativeResult({ rep }) {
  return (
    <li>
      <strong>Name:</strong> {rep.name}
      <br />
      <strong>Title:</strong> {rep.elected_office || "N/A"}
      <br />
      <strong>Party:</strong> {rep.party_name || "N/A"}
      <br />
      <strong>Email:</strong> {rep.email || "N/A"}
      <br />
      <strong>Phone:</strong>{" "}
      {rep.offices && rep.offices.length > 0 ? rep.offices[0].tel : "N/A"}
      <br />
      <strong>Address:</strong>{" "}
      {rep.offices && rep.offices.length > 0 ? rep.offices[0].postal : "N/A"}
    </li>
  );
}
