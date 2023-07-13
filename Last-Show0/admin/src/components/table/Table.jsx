import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Chambre 2 Place",
      img: "https://m.media-amazon.com/images/I/81C9eg-xxPL._AC_SL1500_.jpg",
      customer: "John Smith",
      date: "22 octobre",
      amount: 785,
      method: "Paiement à la livraison",
      status: "Approuvé",
    },
    {
      id: 2235235,
      product: "Résérvation Hotel",
      img: "https://m.media-amazon.com/images/I/81C9eg-xxPL._AC_SL1500_.jpg",
      customer: "Michael",
      date: "24 décembre",
      amount: 900,
      method: "Paiement en ligne",
      status: "En attente",
    },
    {
      id: 2342353,
      product: "Studio",
      img: "https://m.media-amazon.com/images/I/914hShXq-YL._AC_SL1500_.jpg",
      customer: "John",
      date: "15 janvier",
      amount: 350,
      method: "Paiement à la livraison",
      status: "En attente",
    },
    {
      id: 2357741,
      product: "Local",
      img: "https://m.media-amazon.com/images/I/81MqcmTVszL._AC_SL1500_.jpg",
      customer: "Jane",
      date: "30 avril",
      amount: 920,
      method: "Paiement en ligne",
      status: "Approuvé",
    },
    {
      id: 2342355,
      product: "Cabane",
      img: "https://m.media-amazon.com/images/I/81xdmqm3QyS._AC_SL1500_.jpg",
      customer: "Harold",
      date: "1 mars",
      amount: 2000,
      method: "Paiement en ligne",
      status: "En attente",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID de suivi</TableCell>
            <TableCell className="tableCell">Produits</TableCell>
            <TableCell className="tableCell">Client</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Montant</TableCell>
            <TableCell className="tableCell">Mode de paiement</TableCell>
            <TableCell className="tableCell">Statut</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
