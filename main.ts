input.onButtonPressed(Button.A, function () {
    esp8266.sendTelegramMessage("7556620551:AAFrgjj9yWPZzzfPE1_8QsfpfTmHvvxcOeM", "-4537034579", "Mak Hang belen")
    if (esp8266.isTelegramMessageSent()) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
if (esp8266.isESP8266Initialized()) {
    basic.showIcon(IconNames.Heart)
} else {
    basic.showIcon(IconNames.No)
}
esp8266.connectWiFi("YNWA", "liverpool")
if (esp8266.isWifiConnected()) {
    basic.showIcon(IconNames.Yes)
} else {
    basic.showIcon(IconNames.No)
}
basic.forever(function () {
    esp8266.uploadThingspeak(
    "O26FYGGP9PB0VLX5",
    input.soundLevel()
    )
    if (esp8266.isThingspeakUploaded()) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
