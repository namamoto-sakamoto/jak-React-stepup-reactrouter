import { useLocation, useHistory } from "react-router-dom";

export const page1DetailsA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>page1DetailsAです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
