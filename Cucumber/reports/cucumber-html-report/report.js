$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/My Test.Feature");
formatter.feature({
  "line": 2,
  "name": "OpenCart Website",
  "description": "",
  "id": "opencart-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "To Login in the opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC_01_Opencart"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the \u003cfirst\u003e and \u003clast\u003eand \u003cemail\u003eand\u003ctelephone\u003eand\u003caddress\u003eand\u003ccity\u003eand\u003cpost\u003eand\u003ccountry\u003eand\u003cregion\u003eand\u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on \u003cregister\u003e to create a new account",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;",
  "rows": [
    {
      "cells": [
        "first",
        "last",
        "email",
        "telephone",
        "address",
        "city",
        "post",
        "country",
        "region",
        "password",
        "register"
      ],
      "line": 11,
      "id": "opencart-website;to-login-in-the-opencart;;1"
    },
    {
      "cells": [
        "john",
        "kumar",
        "jk97@gmail.com",
        "23456789",
        "berlin street",
        "chennai",
        "600002",
        "India",
        "Tamil",
        "johnkumar",
        "register1"
      ],
      "line": 12,
      "id": "opencart-website;to-login-in-the-opencart;;2"
    },
    {
      "cells": [
        "mukund",
        "kumar",
        "mukundkumar90@gmail.com",
        "23458796",
        "indira street",
        "chennai",
        "600065",
        "India",
        "Tamil",
        "mukundkumar97",
        "register2"
      ],
      "line": 13,
      "id": "opencart-website;to-login-in-the-opencart;;3"
    },
    {
      "cells": [
        "Shreyas",
        "iyer",
        "shreyas20@gmail.com",
        "23905678",
        "bose street",
        "chennai",
        "600078",
        "India",
        "Tamil",
        "shreyas13",
        "register3"
      ],
      "line": 14,
      "id": "opencart-website;to-login-in-the-opencart;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "To Login in the opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 3,
      "name": "@TC_01_Opencart"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the john and kumarand jk97@gmail.comand23456789andberlin streetandchennaiand600002andIndiaandTamilandjohnkumar",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on register1 to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegiSteps.the_user_Opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 14052010061,
  "status": "passed"
});
formatter.match({
  "location": "RegiSteps.the_user_opens_the_registration_webpage()"
});
formatter.result({
  "duration": 3895883309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john ",
      "offset": 19
    },
    {
      "val": " kumar",
      "offset": 27
    },
    {
      "val": " jk97@gmail.com",
      "offset": 36
    },
    {
      "val": "23456789",
      "offset": 54
    },
    {
      "val": "berlin street",
      "offset": 65
    },
    {
      "val": "chennai",
      "offset": 81
    },
    {
      "val": "600002",
      "offset": 91
    },
    {
      "val": "India",
      "offset": 100
    },
    {
      "val": "Tamil",
      "offset": 108
    },
    {
      "val": "johnkumar",
      "offset": 116
    }
  ],
  "location": "RegiSteps.the_user_fiils_the_first_last_email_telephone_address_city_pincode_country_region_password(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 27950008537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register1",
      "offset": 19
    }
  ],
  "location": "RegiSteps.the_user_clicks_on_register_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 7597220706,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "To Login in the opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 3,
      "name": "@TC_01_Opencart"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the mukund and kumarand mukundkumar90@gmail.comand23458796andindira streetandchennaiand600065andIndiaandTamilandmukundkumar97",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on register2 to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegiSteps.the_user_Opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 8927900517,
  "status": "passed"
});
formatter.match({
  "location": "RegiSteps.the_user_opens_the_registration_webpage()"
});
formatter.result({
  "duration": 2897580947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mukund ",
      "offset": 19
    },
    {
      "val": " kumar",
      "offset": 29
    },
    {
      "val": " mukundkumar90@gmail.com",
      "offset": 38
    },
    {
      "val": "23458796",
      "offset": 65
    },
    {
      "val": "indira street",
      "offset": 76
    },
    {
      "val": "chennai",
      "offset": 92
    },
    {
      "val": "600065",
      "offset": 102
    },
    {
      "val": "India",
      "offset": 111
    },
    {
      "val": "Tamil",
      "offset": 119
    },
    {
      "val": "mukundkumar97",
      "offset": 127
    }
  ],
  "location": "RegiSteps.the_user_fiils_the_first_last_email_telephone_address_city_pincode_country_region_password(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 24193917052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register2",
      "offset": 19
    }
  ],
  "location": "RegiSteps.the_user_clicks_on_register_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 7332995112,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "To Login in the opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 3,
      "name": "@TC_01_Opencart"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user Opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user opens the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user fiils the Shreyas and iyerand shreyas20@gmail.comand23905678andbose streetandchennaiand600078andIndiaandTamilandshreyas13",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the user clicks on register3 to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegiSteps.the_user_Opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 8783562064,
  "status": "passed"
});
formatter.match({
  "location": "RegiSteps.the_user_opens_the_registration_webpage()"
});
formatter.result({
  "duration": 2706094890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shreyas ",
      "offset": 19
    },
    {
      "val": " iyer",
      "offset": 30
    },
    {
      "val": " shreyas20@gmail.com",
      "offset": 38
    },
    {
      "val": "23905678",
      "offset": 61
    },
    {
      "val": "bose street",
      "offset": 72
    },
    {
      "val": "chennai",
      "offset": 86
    },
    {
      "val": "600078",
      "offset": 96
    },
    {
      "val": "India",
      "offset": 105
    },
    {
      "val": "Tamil",
      "offset": 113
    },
    {
      "val": "shreyas13",
      "offset": 121
    }
  ],
  "location": "RegiSteps.the_user_fiils_the_first_last_email_telephone_address_city_pincode_country_region_password(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 24686804138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register3",
      "offset": 19
    }
  ],
  "location": "RegiSteps.the_user_clicks_on_register_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 7062975435,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@TC_02_Opencart"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the user login using \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "click on the \u003clogin\u003e button user nagivate to the next page",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "login"
      ],
      "line": 24,
      "id": "opencart-website;to-login-in-the-opencart;;1"
    },
    {
      "cells": [
        "jk97@gmail.com",
        "johnkumar",
        "login1"
      ],
      "line": 25,
      "id": "opencart-website;to-login-in-the-opencart;;2"
    },
    {
      "cells": [
        "mukundkumar90@gmail.com",
        "mukundkumar97",
        "login2"
      ],
      "line": 26,
      "id": "opencart-website;to-login-in-the-opencart;;3"
    },
    {
      "cells": [
        "shreyas20@gmail.com",
        "shreyas13",
        "login3"
      ],
      "line": 27,
      "id": "opencart-website;to-login-in-the-opencart;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 16,
      "name": "@TC_02_Opencart"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the user login using jk97@gmail.com and johnkumar",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "click on the login1 button user nagivate to the next page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 8805005305,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3258369464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jk97@gmail.com",
      "offset": 21
    },
    {
      "val": "johnkumar",
      "offset": 40
    }
  ],
  "location": "LoginPageSteps.the_user_login_using_username_and_password(String,String)"
});
formatter.result({
  "duration": 5612472394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login1",
      "offset": 13
    }
  ],
  "location": "LoginPageSteps.click_on_the_login_button_user_nagivate_to_the_next_page(String)"
});
formatter.result({
  "duration": 5048733746,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 16,
      "name": "@TC_02_Opencart"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the user login using mukundkumar90@gmail.com and mukundkumar97",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "click on the login2 button user nagivate to the next page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 8863693957,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 3301795699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mukundkumar90@gmail.com",
      "offset": 21
    },
    {
      "val": "mukundkumar97",
      "offset": 49
    }
  ],
  "location": "LoginPageSteps.the_user_login_using_username_and_password(String,String)"
});
formatter.result({
  "duration": 7920107429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login2",
      "offset": 13
    }
  ],
  "location": "LoginPageSteps.click_on_the_login_button_user_nagivate_to_the_next_page(String)"
});
formatter.result({
  "duration": 5698748254,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "To Login in the Opencart",
  "description": "",
  "id": "opencart-website;to-login-in-the-opencart;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 16,
      "name": "@TC_02_Opencart"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user opens the opencart webpage",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the user login using shreyas20@gmail.com and shreyas13",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "click on the login3 button user nagivate to the next page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 8999359479,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.the_user_opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 4760679168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shreyas20@gmail.com",
      "offset": 21
    },
    {
      "val": "shreyas13",
      "offset": 45
    }
  ],
  "location": "LoginPageSteps.the_user_login_using_username_and_password(String,String)"
});
formatter.result({
  "duration": 6707703892,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login3",
      "offset": 13
    }
  ],
  "location": "LoginPageSteps.click_on_the_login_button_user_nagivate_to_the_next_page(String)"
});
formatter.result({
  "duration": 5207765004,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "To Login with invalid details",
  "description": "",
  "id": "opencart-website;to-login-with-invalid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@TC_03_Opencart"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "the user launch the app",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "the user opens the login page",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the user giving invalid details \u003cuser\u003e and \u003cpass\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "click on \u003clogin\u003e appropriate error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "opencart-website;to-login-with-invalid-details;",
  "rows": [
    {
      "cells": [
        "user",
        "pass",
        "login"
      ],
      "line": 37,
      "id": "opencart-website;to-login-with-invalid-details;;1"
    },
    {
      "cells": [
        "jk97@gmail.com",
        "johnkumqr",
        "testcase1"
      ],
      "line": 38,
      "id": "opencart-website;to-login-with-invalid-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 38,
  "name": "To Login with invalid details",
  "description": "",
  "id": "opencart-website;to-login-with-invalid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 29,
      "name": "@TC_03_Opencart"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "the user launch the app",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "the user opens the login page",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "the user giving invalid details jk97@gmail.com and johnkumqr",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "click on testcase1 appropriate error message is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidLogin.the_user_launch_the_app()"
});
formatter.result({
  "duration": 8730447301,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLogin.the_user_opens_the_login_page()"
});
formatter.result({
  "duration": 2719487526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jk97@gmail.com",
      "offset": 32
    },
    {
      "val": "johnkumqr",
      "offset": 51
    }
  ],
  "location": "InvalidLogin.the_user_giving_invalid_details_user_and_pass(String,String)"
});
formatter.result({
  "duration": 6773332381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase1",
      "offset": 9
    }
  ],
  "location": "InvalidLogin.click_on_login_appropriate_error_message_is_displayed(String)"
});
formatter.result({
  "duration": 5016187978,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "To Register with invalid email details",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-email-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@TC_04_Opencart"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "the user open the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "the user open the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "the user gives the \u003cfirst\u003e and \u003clast\u003eand \u003cemail\u003eand\u003ctelephone\u003eand\u003caddress\u003eand\u003ccity\u003eand\u003cpost\u003eand\u003ccountry\u003eand\u003cregion\u003eand\u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "the user click on \u003cregister\u003e to create a new account",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-email-details;",
  "rows": [
    {
      "cells": [
        "first",
        "last",
        "email",
        "telephone",
        "address",
        "city",
        "post",
        "country",
        "region",
        "password",
        "register"
      ],
      "line": 48,
      "id": "opencart-website;to-register-with-invalid-email-details;;1"
    },
    {
      "cells": [
        "john",
        "kumar",
        "aki5l.gmail.com",
        "23456789",
        "ganhi street",
        "chennai",
        "600002",
        "India",
        "Tamil",
        "password",
        "testcase2"
      ],
      "line": 49,
      "id": "opencart-website;to-register-with-invalid-email-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 49,
  "name": "To Register with invalid email details",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-email-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 40,
      "name": "@TC_04_Opencart"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "the user open the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "the user open the registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "the user gives the john and kumarand aki5l.gmail.comand23456789andganhi streetandchennaiand600002andIndiaandTamilandpassword",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "the user click on testcase2 to create a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_Opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 8685314565,
  "status": "passed"
});
formatter.match({
  "location": "RegisterInvalidEmail.the_user_opens_the_registration_webpage()"
});
formatter.result({
  "duration": 2832175449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john ",
      "offset": 19
    },
    {
      "val": " kumar",
      "offset": 27
    },
    {
      "val": " aki5l.gmail.com",
      "offset": 36
    },
    {
      "val": "23456789",
      "offset": 55
    },
    {
      "val": "ganhi street",
      "offset": 66
    },
    {
      "val": "chennai",
      "offset": 81
    },
    {
      "val": "600002",
      "offset": 91
    },
    {
      "val": "India",
      "offset": 100
    },
    {
      "val": "Tamil",
      "offset": 108
    },
    {
      "val": "password",
      "offset": 116
    }
  ],
  "location": "RegisterInvalidEmail.the_user_gives_the_first_last_email_telephone_address_city_pincode_country_region_password(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 24588132113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase2",
      "offset": 18
    }
  ],
  "location": "RegisterInvalidEmail.the_user_click_on_register_to_create_a_new_account(String)"
});
formatter.result({
  "duration": 4459728322,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 52,
  "name": "To Register with invalid region",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-region",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 51,
      "name": "@TC_05_Opencart"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "user opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "the user clicks to create registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "the user gives invalid phone the \u003cfirst\u003e and \u003clast\u003eand \u003cemail\u003eand\u003ctelephone\u003eand\u003caddress\u003eand\u003ccity\u003eand\u003cpost\u003eand\u003ccountry\u003eand\u003cregion\u003eand\u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "the user click on \u003cregister\u003e to creates a new account",
  "keyword": "Then "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-region;",
  "rows": [
    {
      "cells": [
        "first",
        "last",
        "email",
        "telephone",
        "address",
        "city",
        "post",
        "country",
        "region",
        "password",
        "register"
      ],
      "line": 59,
      "id": "opencart-website;to-register-with-invalid-region;;1"
    },
    {
      "cells": [
        "akil",
        "kumar",
        "akil2@gmail.com",
        "2345907b",
        "ganhi street",
        "chennai",
        "600002",
        "India",
        "Indonesia",
        "password",
        "testcase3"
      ],
      "line": 60,
      "id": "opencart-website;to-register-with-invalid-region;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 60,
  "name": "To Register with invalid region",
  "description": "",
  "id": "opencart-website;to-register-with-invalid-region;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@OpenCart"
    },
    {
      "line": 51,
      "name": "@TC_05_Opencart"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "user opens the opencart webpage",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "the user clicks to create registration webpage",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "the user gives invalid phone the akil and kumarand akil2@gmail.comand2345907bandganhi streetandchennaiand600002andIndiaandIndonesiaandpassword",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "the user click on testcase3 to creates a new account",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterInvalidRegion.user_opens_the_opencart_webpage()"
});
formatter.result({
  "duration": 8961483341,
  "status": "passed"
});
formatter.match({
  "location": "RegisterInvalidRegion.the_user_clicks_to_create_registration_webpage()"
});
formatter.result({
  "duration": 2841346616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " akil ",
      "offset": 32
    },
    {
      "val": " kumar",
      "offset": 41
    },
    {
      "val": " akil2@gmail.com",
      "offset": 50
    },
    {
      "val": "2345907b",
      "offset": 69
    },
    {
      "val": "ganhi street",
      "offset": 80
    },
    {
      "val": "chennai",
      "offset": 95
    },
    {
      "val": "600002",
      "offset": 105
    },
    {
      "val": "India",
      "offset": 114
    },
    {
      "val": "Indonesia",
      "offset": 122
    },
    {
      "val": "password",
      "offset": 134
    }
  ],
  "location": "RegisterInvalidRegion.the_user_gives_invalid_phone(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 23982522582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testcase3",
      "offset": 18
    }
  ],
  "location": "RegisterInvalidRegion.the_user_click_on_testcase_to_creates_a_new_account(String)"
});
formatter.result({
  "duration": 7223453814,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "To add to cart",
  "description": "",
  "id": "opencart-website;to-add-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 62,
      "name": "@TC_06_Opencart"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "the user launches the web application",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "the user launch the opencart",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "the user search for the products",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "click on add to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "addToCartstepDefinition.the_user_launches_the_web_application()"
});
formatter.result({
  "duration": 3986846684,
  "status": "passed"
});
formatter.match({
  "location": "addToCartstepDefinition.the_user_launch_the_opencart()"
});
formatter.result({
  "duration": 4718744372,
  "status": "passed"
});
formatter.match({
  "location": "addToCartstepDefinition.the_user_search_for_the_products()"
});
formatter.result({
  "duration": 21446608595,
  "status": "passed"
});
formatter.match({
  "location": "addToCartstepDefinition.click_on_add_to_cart()"
});
formatter.result({
  "duration": 2522531146,
  "status": "passed"
});
});