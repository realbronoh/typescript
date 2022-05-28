{
  // function: login -> success, fail
  type SuccessState = {
    result: "SUCCESS";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "FAIL";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login2(): LoginState {
    return {
      result: "SUCCESS",
      response: {
        body: "logged in !",
      },
    };
  }

  // 특정 key를 통해 구분하는 방법: 비권장
  function printLoginState(state: LoginState) {
    if (state.result === "SUCCESS") {
      // success case
      console.log(`success: ${state.response.body}`);
    } else {
      // fail case
      console.log(`failed: ${state.reason}`);
    }
  }
}
