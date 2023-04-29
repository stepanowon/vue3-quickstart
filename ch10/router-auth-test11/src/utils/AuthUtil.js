const staticUsers = [
    { userid:"user1", password:"1234", roles: ["users"] },
    { userid:"user2", password:"1234", roles: ["users"] },
    { userid:"admin", password:"1234", roles: ["users","admins"] },
] 

const pathsToRoles = [
    { path:"/", roles: ["everybody"] },
    { path:"/login", roles: ["everybody"] },
    { path:"/users", roles: ["users","admins"] },
    { path:"/admins", roles: ["admins"] },
]

//userInfo가 null이면 로컬 스토리지 삭제
const setUserInfo = (userInfo) => {
    if (userInfo && userInfo.authenticated) {
        window.localStorage.setItem("userInfo", btoa(JSON.stringify(userInfo)))
    } else {
        window.localStorage.removeItem("userInfo")
    }
}

const getUserInfo = () => {
    let strUserInfo = window.localStorage.getItem("userInfo");
    if (!strUserInfo) {
        return { authenticated: false};
    } else {
        return JSON.parse(window.atob(strUserInfo));
    }
}

const loginProcess = (userid, password, successCallback, failCallback) => {
    //이 부분은 백엔드 API 인증 서버와 HTTP로 통신하여 인증 처리해야 함.
    const user= staticUsers.find((u) => u.userid===userid && u.password===password);
    if (user) {
        let userInfo = { authenticated:true, userid:user.userid, roles: user.roles };
        setUserInfo(userInfo);
        successCallback();
    } else {
        if (failCallback) failCallback();       
    }
}

const logoutProcess = (callback) => {
    setUserInfo(null);      //로컬 스토리지 삭제
    callback();
}

//경로와 사용자 정보의 role을 기반으로 접근 허가 여부 결정(true/false)
const isMatchToRoles = (reqPath) => {
    //{ path:"/", roles: ["everybody"] }
    const path = pathsToRoles.find((pr)=>pr.path === reqPath);
    //경로가 없다면 접근 불가
    if (!path)  return false;

    const userInfo = getUserInfo();
    //인증되지 않았다면 everybody 가 지정된 경로만 접근 가능
    if (userInfo.authenticated === false) {
        return path.roles.find((p)=>p==="everybody") ? true : false;
    } else {
        //인증이 되었다면 userInfo의 roles와 path.roles에 동일한 것이 있어야 함.
        let isAccessible = false;
        if (path.roles.indexOf('everybody') > -1) {
            isAccessible = true;
        } else {
            for (let i=0; i < userInfo.roles.length; i++) {
                let role = userInfo.roles[i];
                const index = path.roles.indexOf(role);
                if (index >= 0) {
                    isAccessible = true;
                    break;
                }
            }
        }

        return isAccessible;
    }
}

export { isMatchToRoles, loginProcess, logoutProcess, getUserInfo };