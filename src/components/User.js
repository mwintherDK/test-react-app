export default function User(props) {
  return (
    <div>
      <p>
        Brugeren hedder {props.info.name}, har brugernavn {props.info.username}
        og email:{props.info.email}
      </p>
    </div>
  );
}
