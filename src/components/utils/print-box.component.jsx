const Printbox = ({ id }) => {
  return Boolean(id) ? <div>Id of Event is: {id}</div> : null;
};

export default Printbox;
