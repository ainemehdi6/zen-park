import { useEffect, useState } from "react";
import { Placeholder, Table } from "react-bootstrap";
import getParkSlots from "../../api/getParkSlots";
import deleteParkSlot from "../../api/deleteParkSlot";

function ListParkSlot() {
  const [parkSlotList, setParkSlotList] = useState<ParkSlots[]>([]);
  useEffect(() => {
    getParkSlots().then((json) => setParkSlotList(json));
  }, []);

  const handleDeleteClick = async (id: string) => {
    try {
      await deleteParkSlot(id);
    } catch (error) {
      console.error('Error deleting park slot:', error);
    }
  };

  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Prix pour une heure</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {parkSlotList.length ? (
          parkSlotList.map((parkSlot, id) => (
            <tr key={`parkSlot-${id}`}>
              <td>{parkSlot.firstName}</td>
              <td>{parkSlot.lastName}</td>
              <td>{parkSlot.priceForOneHour}</td>
              <td>
                <span
                  role="button"
                  tabIndex={0}
                  onClick={() => handleDeleteClick(parkSlot.id)}
                  onKeyDown={() => handleDeleteClick(parkSlot.id)}
                >
                  &#x1F5D1;
                </span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>
              <Placeholder animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
            </td>
            <td>
              <Placeholder animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
            </td>
            <td>
              <Placeholder animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default ListParkSlot;
