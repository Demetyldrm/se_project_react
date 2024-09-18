import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card, onDelete }) {
  const handleDeleteCardClick = () => {
    onDelete(card._id);
  };
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__foter">
          <h2 className="modal__caption">{card?.name}</h2>
          <p className="modal__weather">Weather :{card?.weather}</p>
        </div>
        <button className="modal__delete" onClick={handleDeleteCardClick}>
          Delete item
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
