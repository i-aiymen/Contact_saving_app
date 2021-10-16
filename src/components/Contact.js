function Contact({ contact: { name, phone, email } }) {
  //console.log(contact);
  return (
    <>
      <div className="col">
        <div className="card shadow-sm w-100">
          <div className="card-header">
            <div className="row">
              <div className="col-6 ">{name}</div>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{phone}</li>
            <li className="list-group-item">{email}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contact;
