    // Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
    // https://croquet.io
    // info@croquet.io
    
    export function init(Constants) {
        Constants.AvatarNames = ["newwhite",  "marchhare", "queenofhearts", "cheshirecat", "alice"];
    
        /* Alternatively, you can specify a card spec for an avatar,
           instead of a string for the partical file name, to create your own avatar.
           You can add behaviorModules here. Also, if the system detects a behavior module
           named AvatarEventHandler, that is automatically installed to the avatar.
            {
                type: "3d",
                modelType: "glb",
                name: "rabbit",
                dataLocation: "./assets/avatars/newwhite.zip",
                dataRotation: [0, Math.PI, 0],
                dataScale: [0.3, 0.3, 0.3],
            }
        */
    
        Constants.ExcludedSystemBehaviorModules = ["avatarEvents.js"];
        Constants.UserBehaviorDirectory = "behaviors/default";
        Constants.UserBehaviorModules = [
            "avatarEvents.js", "csmLights.js", 'halloweenLights.js', 'jumpWorld.js', 'spideyJumpOnApproach.js', 'synchronousLoad.js', 'urlLink.js'
        ];
    
        Constants.DefaultCards = [
            {
                card: {
                    name:"world model",
                    layers: ["walk"],
                    type: "3d",
                    singleSided: true,
                    shadow: true,
                    translation:[0, -1.7, 0],
                    placeholder: true,
                    placeholderSize: [400, 0.1, 400],
                    placeholderColor: 0x808080,
                    placeholderOffset: [0, 0, 0],
                    // behaviorModules: ['LoadCards']
                    // behaviorModules: ['SynchronousCardLoader']
                }
            },
            {
                card: {
                    name: "light",
                    layers: ["light"],
                    type: "lighting",
                    behaviorModules: ["Light"],
                    dataLocation: "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                    fileName: "/abandoned_parking_4k.jpg",
                    dataType: "jpg",
                }
            },
            {
                card: {
                    animationClipIndex:0,
                    animationStartTime: 4365797,
                    animationProximateDistance: 50,
                    animationCheckInterval: 20,
                    animationProximateAnimationClip: 12,
                    animationDistantAnimationClip: 4,
                    behaviorModules: ['SpideyJumpOnApproach'],
                    delayAfterJump: 1000,
                    name: '/spiderman-rigged.glb',
                    fileName: '/spiderman-rigged.glb',
                    dataLocation: "3nkvssiWbp4Kp3XVeZZoG39fIaYeDr7K0gMYQqBjPja4BhoaHh1UQUEIBwILHUAbHUANHAEfGwsaQAcBQRtBAAchHCUoWFtcBiApOwA9XB4AGiVYKj88XCcfXEENAQNAGwIaBx0HA0ACBwAKD0AMCxwADxwKQAMHDRwBGAscHQtBBVsmDDxaFzQhAyEoXxgpIzsUGjYJJF8_Pj1aHgMLNAk7Vg9aLF8oXBknI0EKDxoPQSocXgsgACUkFiIdWzEaNiEWWwAkMQ1YCiUUASkGNhgiKgQ3L1kKLwhdFB0",
                    dataScale: [226, 226, 226],
                    layers: ['pointer'],
                    modelType: 'glb',
                    rotation:  [-0.007537241996760254, 0.23213362494298506, 0.04412154985861157, 0.9716534665157047],
                    scale: [0.5, 0.5, 0.5],
                    shadow: true,
                    singleSided: true,
                    translation:[0.14, -1.48, -11],
                    translationBeforeJump: [0.14, -1.48, -11],
                    translationAfterJump: [0.14, -1.48, -6],
                    type: '3d'
                }
            },
            {
                card: {
                    cornerRadius: 0.02,
                    loadSynchonously: true,
                    behaviorModules: ["URLLink"],
                    cardURL: "https://www.target.com/p/marvel-spider-man-legends-series-peter-b-parker-action-figure/-/A-87012329",
                    fileName: "/amazing-spider-man-2-spider-strike-shock-surge-spider-man-package.jpg",
                    fullBright: true,
                    layers: ["pointer"],
                    modelType: "img",
                    name: "/amazing-spider-man-2-spider-strike-shock-surge-spider-man-package.jpg",
                    rotation: [0, 0, 0],
                    scale: [2.55, 2.55, 2.55],
                    shadow: true,
                    singleSided: true,
                    textureLocation: "3c7YYZ7SeumAdf-9ifGiTssSRECTvVMNVx4Cf2ly3zO0CxcXExBZTEwFCg8GEE0WEE0AEQwSFgYXTQoMTBZMDQosESglVVZRCy0kNg0wURMNFyhVJzIxUSoSUUwADA5NFg8XChAKDk0PCg0HAk0BBhENAhEHTQ4KABEMFQYREAZMUxRWMlQ0AgArThQqIDA0EyxaBlEpIRQSCyQrETMIW1sOJ1cXPFEuFCklLkwHAhcCTAoqVVJRJVoLJwgpVCkFLQ00LTNbMA0xFAsFCREQMgAMG1YXThQwGzQlOQQ",
                    textureType: "image",
                    translation: [0.198, -0.150, -11.829],
                    type: "2d"
                }
            },
            {
                card:{
                    cornerRadius: 0.02,
                    fileName: "Summer-Poster.png",
                    fullBright: true,
                    layers: ["pointer"],
                    modelType: "img",
                    name: "Summer-Poster.png",
                    rotation: [null, null, null, null],
                    scale: [2.8, 2.8, 2.8],
                    shadow: true,
                    singleSided: true,
                    textureLocation: "3zBGBoV5_7sTaiScM6gFg0eroehvjbfx_pcWuE3F8ReMEg4OCglAVVUcExYfCVQPCVQZCBULDx8OVBMVVQ9VFBM1CDE8TE9IEjQ9LxQpSAoUDjFMPisoSDMLSFUZFRdUDxYOEwkTF1QWExQeG1QYHwgUGwgeVBcTGQgVDB8ICR9VK00dHCIOFSIKAkkYDj5KGzNCTkNPKTgeTB0rNik5L0ggERwVTyJJMwMlQlUeGw4bVQI8FU8VKSgROBcqT1ciCjQcDEkOMABJSTsrE0wuAjMbVxs4Lk8dGCgRLy8",
                    textureType: "image",
                    translation: [-3.065, 0, -8.05],
                    type: "2d"
                }
            },
            {
                card: {
                    cornerRadius: 0.02,
                    fileName: "Christmas-Poster.png",
                    fullBright: true,
                    layers: ["pointer"],
                    modelType: "img",
                    name: "Christmas-Poster.png",
                    rotation: [  0,
                        0.7237099543549771,
                        0,
                        0.6901042689097902 ],
                    scale: [  4.020703324814061,
                        4.020703324814061,
                        4.020703324814061 ],
                    shadow: true,
                    singleSided: true,
                    textureLocation: "3C7pLwmb9qZ1NFKCbS9kisDowpe_bBG-_9Dh5qgOWzfYKzc3MzB5bGwlKi8mMG02MG0gMSwyNiY3bSosbDZsLSoMMQgFdXZxKw0EFi0QcTMtNwh1BxIRcQoycWwgLC5tNi83KjAqLm0vKi0nIm0hJjEtIjEnbS4qIDEsNSYxMCZsEnQkJRs3LBszO3AhNwdzIgp7d3p2EAEndSQSDxAAFnEZKCUsdhtwCjoce2wnIjcibAZzCDIpFC0tKgg5GhEIDRQqcBIWBjkhMBsXCQsaegcWLXo5DAglMS5ydw4",
                    textureType: "image",
                    translation: [ -0.9824268760068162,
                        -0.2990113590235549,
                        -11.980274028730268],
                    type: "2d"
                }
            },
            {
                "card": {
                    "cornerRadius": 0.02,
                    "fileName": "Summer-Poster.png",
                    "fullBright": true,
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "img",
                    "name": "Summer-Poster.png",
                    "rotation": [
                        0,
                        0,
                        0,
                        0
                    ],
                    "scale": [
                        4.899302937007668,
                        4.899302937007668,
                        4.899302937007668
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "textureLocation": "34uXMvNRPx9GuFj7bp5s9eiMLJHT-z3WChRt7Ii2_BXoXEBAREcOGxtSXVhRRxpBRxpXRltFQVFAGl1bG0EbWl17Rn9yAgEGXHpzYVpnBkRaQH8CcGVmBn1FBhtXW1kaQVhAXUddWRpYXVpQVRpWUUZaVUZQGlldV0ZbQlFGR1EbZQNTUmxAW2xETAdWQHAEVX0MAA0BZ3ZQAlNleGd3YQZuX1JbAWwHfU1rDBtQVUBVG3pWeE5_WUd9Akx3BmZTU01SQXtWUHx5XVlkYlVnRXJ_e3Z5AV18cm1MXWE",
                    "textureType": "image",
                    "translation": [
                        -2.4777855657131433,
                        0.923600081551349,
                        -9.058288163543128
                    ],
                    "type": "2d"
                }
            },
            {
                card:{
                    cornerRadius: 0.02,
                    fileName: "Easter-Shop.png",
                    fullBright: true,
                    layers: ["pointer"],
                    modelType: "img",
                    name: "Easter-Shop.png",
                    rotation: [  0,
                        -0.704586136866266,
                        0,
                        0.7096184719522679 ],
                    scale: [5.151613918539466,
                        5.151613918539466,
                        5.151613918539466 ],
                    shadow: true,
                    singleSided: true,
                    textureLocation: "3PdMexo-NDIIXeyQWJmeWw4CfGshwkbDtFeAnUKSaKx8OCQkICNqf382OTw1I34lI34zIj8hJTUkfjk_fyV_PjkfIhsWZmViOB4XBT4DYiA-JBtmFAECYhkhYn8zPz1-JTwkOSM5PX48OT40MX4yNSI-MSI0fj05MyI_JjUiIzV_AWc3NggkPwggKGMyJBRgMRloZGllAxI0ZjcBHAMTBWIKOzY_ZQhjGSkPaH80MSQxfxplGDlnGmABMwISAWIAYCgYITkzCjsZNTUCaR0fYSooZyNhNGEXGQAJFSc",
                    textureType: "image",
                    translation: [ 4.328580661947529,
                        -0.5974997141291118,
                        -11.93433912152826 ],
                    type: "2d"
                }
            },
            {
                card:{
                    jumpCheckInterval: 20,
                    jumpDistance: 1,
                    translationAfterJump: [-49, -0.01, 123.46],
                    targetURL: "https://engagelively.github.io/halloween-farm/?q=9y8pczo6w0#pw=wj16F7vGj3OK5u6LuY8eyA",
                    cornerRadius: 0.02,
                    fileName: "HALLOWEEN.png",
                    fullBright: true,
                    layers: ["pointer"],
                    behaviorModules: [ "JumpWorld" ],
                    reuseTab: true,
                    // replaceWorldTargetURL: "https://lin564.github.io/playground/?q=iumpzdabw0#pw=HuTXLIZY72VpemmSharYQg",
                    modelType: "img",
                    name: "HALLOWEEN.png",
                    rotation: [  0.0006869564851698009,
                        -0.012977217723439094,
                        -0.002929736170799331,
                        0.9999112643414494
                    ],
                    scale: [  5.936740345795934,
                        5.936740345795934,
                        5.936740345795934 ],
                    shadow: true,
                    singleSided: true,
                    textureLocation: "3YRRea1Kjzl1bhpnaZg5VRtrrXd2rs0LWS7HIKP4qO9EMS0tKSpjdnY_MDU8KncsKnc6KzYoLDwtdzA2dix2NzAWKxIfb2xrMRceDDcKayk3LRJvHQgLaxAoa3Y6NjR3LDUtMCowNHc1MDc9OHc7PCs3OCs9dzQwOis2LzwrKjx2CG4-PwEtNgEpIWo7LR1pOBBhbWBsChs9bz4IFQoaDGsDMj82bAFqECAGYXY9OC04dh50EQ8-DwAObAYJLBA7Gho4NjUzbBwQGBcbGioPbTMOdBhtCj49ND41FG0",
                    textureType: "image",
                    translation: [ 1.9982312047751332,
                        1.1256606417362955,
                        -24.989503537329156 ],
                    type: "2d"
                }
            },
            {
                card: {
                    dataLocation: "3osaNvZ4wYTwHpRDt10uB6XnJUad8ozLG3ktK1TgVEX8BxsbHxxVQEAJBgMKHEEaHEEMHQAeGgobQQYAQBpAAQYgHSQpWVpdByEoOgE8XR8BGyRZKz49XSYeXUAMAAJBGgMbBhwGAkEDBgELDkENCh0BDh0LQQIGDB0AGQodHApABFonDT1bFjUgAiApXhkoIjoVGzcIJV4-PzxbHwIKNQg6Vw5bLV4pXRgmIkALDhsOQCI4NRkKJR8GPiAnJwk3Hi0aPgk3K10JWCEaPg02NwkHBTwXCDkpIjkgDRw",
                    dataScale: [ 0.06388637900599145, 0.06388637900599145, 0.06388637900599145 ],
                    fileName: "/Untitled.glb",
                    loadSynchonously: true,
                    layers: ["pointer"],
                    modelType: "glb",
                    name: "/Untitled.glb",
                    rotation: [ 0, -0.005115640668392818, 0, -0.9999869150246674 ],
                    scale: [ 10.131048105501707, 10.131048105501707, 10.131048105501707 ],
                    shadow: true,
                    singleSided: true,
                    translation: [ 1.6140875098667018, -1.6408487161911678, -16.0302585355405 ], type: "3d"
                }
            },
            {
                "card": {
                    "dataLocation": "3-3VogCBX12eOQUsKcOprw2ApA8ZIWWdZwk3aJED4pg4Q19fW1gRBARNQkdOWAVeWAVIWURaXk5fBUJEBF4ERUJkWWBtHR4ZQ2VsfkV4GVtFX2Adb3p5GWJaGQRIREYFXkdfQlhCRgVHQkVPSgVJTllFSllPBUZCSFlEXU5ZWE4EehxMTXNfRHNbUxhJX28bSmITHxIeeGlPHUx6Z3hofhlxQE1EHnMYYlJ0EwRPSl9KBB8ZH0B0T0ZZH15HGFFvE3R5WHQGbnppWm9GE09CBmRKbGlidFJYZR9GQWY",
                    "dataScale": [
                        1.012301534197556,
                        1.012301534197556,
                        1.012301534197556
                    ],
                    "fileName": "/store_shelves.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/store_shelves.glb",
                    "rotation": [
                        -0.002699200135557262,
                        0.17810073441367574,
                        0.0003283459215084048,
                        0.9840085034738741
                    ],
                    "scale": [
                        1.5828360211495835,
                        1.5828360211495835,
                        1.5828360211495835
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        5.238433738949451,
                        -1.2232305372097274,
                        -24.398759096356393
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "dataLocation": "3kg_F6Nm2aBpefLmoGp1teyTJtRVUBHonmFj3L6TFCC0Ax8fGxhRREQNAgcOGEUeGEUIGQQaHg4fRQIERB5EBQIkGSAtXV5ZAyUsPgU4WRsFHyBdLzo5WSIaWUQIBAZFHgcfAhgCBkUHAgUPCkUJDhkFChkPRQYCCBkEHQ4ZGA5EOlwMDTMfBDMbE1gJHy9bCiJTX1JeOCkPXQw6JzgoPlkxAA0EXjNYIhI0U0QPCh8KRBNaHQg5Rgk_JjlSHTESLwUyOzwGBh4TAioiGSYeKSNaMhhYBgApOyMbLyI",
                    "dataScale": [
                        1.012301534197556,
                        1.012301534197556,
                        1.012301534197556
                    ],
                    "fileName": "/store_shelves.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/store_shelves.glb",
                    "rotation": [
                        0,
                        -0.25444428086441667,
                        0,
                        0.9670874355172803
                    ],
                    "scale": [
                        1.7491693924603147,
                        1.7491693924603147,
                        1.7491693924603147
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        14.324429810856975,
                        -1.2276278843995652,
                        -9.986557912571218
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "dataLocation": "3LKtXuLmD1-xrJZ-DIzSs0UO8U8nvWCUsZcne4C24RdIJDg4PD92Y2MqJSApP2I5P2IvPiM9OSk4YiUjYzljIiUDPgcKenl-JAILGSIffjwiOAd6CB0efgU9fmMvIyFiOSA4JT8lIWIgJSIoLWIuKT4iLT4oYiElLz4jOik-PyljHXsrKhQ4IxQ8NH8uOAh8LQV0eHV5Hw4oeisdAB8PGX4WJyojeRR_BTUTdGMoLTgtY3Q_JAkvIS0VfQIdJz91Lz0DJ3oYHwUaFiMrfyk4fyUaKzs5HCYkOTQCOHg",
                    "dataScale": [
                        0.5931322557908479,
                        0.5931322557908479,
                        0.5931322557908479
                    ],
                    "fileName": "/beach_scene.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/beach_scene.glb",
                    "rotation": [
                        0,
                        0.8344098041320194,
                        0,
                        0.5511445171353566
                    ],
                    "scale": [
                        1.2483295843262197,
                        1.2483295843262197,
                        1.2483295843262197
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        -4.415557468829602,
                        -1.2273771488701564,
                        -6.326939772837574
                    ],
                    "type": "3d"
                }
            },
            {
                "card": {
                    "dataLocation": "3TH5G3nb54FITEp0OkEhUas04inkf0MB9wI-dou9pa24PCAgJCdue3syPTgxJ3ohJ3o3JjslITEgej07eyF7Oj0bJh8SYmFmPBoTAToHZiQ6IB9iEAUGZh0lZns3Ozl6ITggPSc9OXo4PTowNXo2MSY6NSYwejk9NyY7IjEmJzF7BWMzMgwgOwwkLGc2IBBkNR1sYG1hBxYwYjMFGAcXAWYOPzI7YQxnHS0LbHswNSA1ez4ebTszNmMgORwTGzMNZxwOMRsBGxcbYxIGC2ATZRIzJxsaLB4LInkYGD8",
                    "dataScale": [
                        1.553902704558893,
                        1.553902704558893,
                        1.553902704558893
                    ],
                    "fileName": "/beach_chair.glb",
                    "layers": [
                        "pointer"
                    ],
                    "modelType": "glb",
                    "name": "/beach_chair.glb",
                    "rotation": [
                        0,
                        0.9499750610367039,
                        0,
                        -0.3123257648806947
                    ],
                    "scale": [
                        0.5752912573725966,
                        0.5752912573725966,
                        0.5752912573725966
                    ],
                    "shadow": true,
                    "singleSided": true,
                    "translation": [
                        -1.4212282308215172,
                        -1.0825545000148356,
                        -5.842389845725546
                    ],
                    "type": "3d"
                }
            }
        ];
    }
    
