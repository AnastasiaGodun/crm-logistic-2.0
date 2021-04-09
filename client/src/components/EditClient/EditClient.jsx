import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { editClientSaga } from '../../redux/actionCreators/clientAC';

export default function AddClient() {
  const formRef = useRef(null);

  const history = useHistory();

  const dispatch = useDispatch();

  const client = useSelector(state => state.client);

  const homeAddress = client.homeAddress.splite(', ');
  const registrationAddress = client.registrationAddress.splite(', ');

  const submitHandler = (e) => {
    e.preventDefault();

    const valuesOfFields = Object.fromEntries(new FormData(formRef.current).entries());

    if (Object.keys(valuesOfFields).every(key => valuesOfFields[key].trim())) {
      valuesOfFields.id = client._id;
      dispatch(editClientSaga(valuesOfFields));
      formRef.current.reset();
      history.push(`/clients/${client._id}`);
    }
  }
  return (
    <>
      <div className="container d-flex justify-content-center aling-items-center">
        Редактирование клиента
      </div>
      <div className="container-fluid d-flex justify-content-center aling-items-center vh-100 mt-3">
        <form ref={formRef} onSubmit={submitHandler} id="registerForm" action="/clients/new" method="POST">
          <div className="mb-3">
            <input placeholder="Имя" value={client.name} type="text" name="name" required className="form-control" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <input placeholder="Отчество" value={client.middlename} type="text" name="middlename" required className="form-control" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <input placeholder="Фамилия" type="text" value={client.lastname} name="lastname" required className="form-control" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <input placeholder="Телефон" type="text" value={client.phone} name="phone" required className="form-control" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <input placeholder="Email адрес" type="email" value={client.email} name="email" required className="form-control" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <input placeholder="Город" type="text" value={homeAddress[0]} name="city" required className="form-control" />
          </div>
          <div className="mb-3">
            <input placeholder="Улица" type="text" value={homeAddress[1]} name="street" required className="form-control" />
          </div>
          <div className="mb-3">
            <input placeholder="Дом/строение" type="text" value={homeAddress[2]} name="building" required className="form-control" />
          </div>
          <div className="mb-3">
            <input placeholder="Квартира/помещение" value={homeAddress[3]} type="text" name="room" required className="form-control" />
          </div>
          <div className="mb-3">
            <input placeholder="Город" value={registrationAddress[0]} type="text" name="cityReg" required className="form-control" />
          </div>
          <div className="mb-3">
            <input placeholder="Улица" value={registrationAddress[1]} type="text" name="streetReg" required className="form-control" />
          </div>
          <div className="mb-3">
            <input placeholder="Дом/строение" value={registrationAddress[2]} type="text" name="buildingReg" required className="form-control" />
          </div>
          <div className="mb-3">
            <input placeholder="Квартира/помещение" value={registrationAddress[3]} type="text" name="roomReg" required className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Добавить</button>
        </form>
      </div>
    </>
  )
}
