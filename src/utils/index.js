import Cookies from 'universal-cookie';

// ----------------------Cookies------------------------//

const cookies = new Cookies();


export const getCookies = (key) => {
    const cookie = cookies.get(key);
    if (cookie) {
        return cookie;
    }
    return null;
}


export const setCookies = (key, value, options) => {
    const cookie = cookies.get(key);
    const expiryDate= cookie?.expiryDate
    // delete value['expiryDate']
    // console.log(value,'deleted');
    if (cookie) {
    // if (cookie && options.timer !== 'dont update') {
        cookies.set(key, {...value, expiryDate}, {
            ...options,
            path: '/',
            
            expires: new Date(cookie?.expiryDate)
        });
    } 
    else {
        const expiryDate = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7);
        cookies.set(key, { ...value, expiryDate }, {
            ...options,
            path: '/',
            expires: expiryDate
        });
    }

}

// export const updateCookie = (key, value, options) => {
//     const cookie = cookies.get(key);
//     const expiryDate= cookie?.expiryDate;

//     console.log({ ...value})
//     const updatedCookieValue = {
//         ...value,
//       };
//     cookies.set(key, {...updatedCookieValue, expiryDate}, {
//         ...options,
//         path: '/',
        
//         expires: new Date(cookie?.expiryDate)
//     });
// }

export const updateCookie = (key, value, options) => {
    const cookie = cookies.get(key);
    const expiryDate= cookie?.expiryDate;

    const updatedCookieValue = {
        ...cookie,
        ...value,
      };
    cookies.set(key, {...updatedCookieValue, expiryDate}, {
        ...options,
        path: '/',
        
        expires: new Date(cookie?.expiryDate)
    });
}

export const setCredits = (credits) => {
    setCookies('credits',{credits}, {
        path:'/'
      })
}



    export const delCookies = (key, options) => {
            cookies.remove(key, {
                options,
               
            });
        }


    export const delAllCookies = () => {
        document.cookie.split(";").forEach((c) => {
            document.cookie = c
              .replace(/^ +/, "")
              .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
          })
    }
    


// ------------------------Validation-------------------------//

export const validateEmail = email => {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };
  
  export const validateFullName = name => {
    const regex = /^[a-zA-Z._-]{3,}(?: [a-zA-Z._-]+){0,2}$/;
    return regex.test(String(name).toLowerCase());
  };
  
  export const validateExpiry = date => {
    const regex = /^(0[1-9]|1[0-2])\/([0-9]{4})$/;
    return regex.test(String(date).toLowerCase());
  };
  export const validateuserUniqueName = userUniqueName => {
    var regex = /^[a-z0-9-]{6,10}$/;
    return regex.test(String(userUniqueName));
  };
  
  