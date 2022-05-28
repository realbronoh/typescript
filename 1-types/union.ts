{
  /*
   * Union Types: OR
   * 발생할 수 있는 경우 중 하나만 적용할 때
   */

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: "logged in !",
      },
    };
  }

  // 특정 key를 통해 구분하는 방법: 비권장
  function pringLoginState(state: LoginState) {
    if ("response" in state) {
      // success case
      console.log(`success: ${state.response.body}`);
    } else {
      // fail case
      console.log(`failed: ${state.reason}`);
    }
  }
}
