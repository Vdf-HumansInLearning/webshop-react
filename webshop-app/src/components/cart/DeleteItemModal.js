function DeleteItemModal({ deleteCartItem, id }) {
  return (
    <div className="modal" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              Are you sure you want to delete this item?
            </h5>
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body"></div>
          <div className="modal-footer d-flex justify-content-between">
            <button
              className="btn btn-secondary"
              type="button"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              onClick={() => deleteCartItem(id)}
              type="button"
              className="btn btn-danger"
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteItemModal;
