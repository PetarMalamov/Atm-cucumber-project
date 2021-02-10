$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("changePin.feature");
formatter.feature({
  "line": 1,
  "name": "Смяна на пин код",
  "description": "",
  "id": "смяна-на-пин-код",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Смяна на пин код",
  "description": "",
  "id": "смяна-на-пин-код;смяна-на-пин-код",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Потребителят поставя кредитна/дебитна карта с номер \"asd123\" в банкомата , с цел смяна на пин",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Въведе стар пин код \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе нов пин код \"54654\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Натисне бутона за смяна на пин код",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Показва съобщение \"Смяната на паролата беше успешна\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "asd123",
      "offset": 53
    }
  ],
  "location": "ChangePinSteps.InsertCard(String)"
});
formatter.result({
  "duration": 199512400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 21
    }
  ],
  "location": "ChangePinSteps.EnterOldPin(String)"
});
formatter.result({
  "duration": 69000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "54654",
      "offset": 20
    }
  ],
  "location": "ChangePinSteps.EnterNewPin(String)"
});
formatter.result({
  "duration": 73700,
  "status": "passed"
});
formatter.match({
  "location": "ChangePinSteps.ClickConfirmButton()"
});
formatter.result({
  "duration": 113400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Смяната на паролата беше успешна",
      "offset": 19
    }
  ],
  "location": "ChangePinSteps.ShowEndMessage(String)"
});
formatter.result({
  "duration": 1584100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Смяна на пин код , когато стария пин е същия като новия",
  "description": "",
  "id": "смяна-на-пин-код;смяна-на-пин-код-,-когато-стария-пин-е-същия-като-новия",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Потребителят поставя кредитна/дебитна карта с номер \"asd123\" в банкомата , с цел смяна на пин",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Въведе стар пин код \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Въведе нов пин код \"1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Натисне бутона за смяна на пин код",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Показва съобщение \"Смяната на паролата беше неуспешна,не може новата и старата парола да са еднакви\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "asd123",
      "offset": 53
    }
  ],
  "location": "ChangePinSteps.InsertCard(String)"
});
formatter.result({
  "duration": 244700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 21
    }
  ],
  "location": "ChangePinSteps.EnterOldPin(String)"
});
formatter.result({
  "duration": 59700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 20
    }
  ],
  "location": "ChangePinSteps.EnterNewPin(String)"
});
formatter.result({
  "duration": 61800,
  "status": "passed"
});
formatter.match({
  "location": "ChangePinSteps.ClickConfirmButton()"
});
formatter.result({
  "duration": 29400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Смяната на паролата беше неуспешна,не може новата и старата парола да са еднакви",
      "offset": 19
    }
  ],
  "location": "ChangePinSteps.ShowEndMessage(String)"
});
formatter.result({
  "duration": 54000,
  "status": "passed"
});
formatter.uri("withdrawal.feature");
formatter.feature({
  "line": 1,
  "name": "Теглене на пари",
  "description": "",
  "id": "теглене-на-пари",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Теглене на пари от банкомат с валидни данни",
  "description": "",
  "id": "теглене-на-пари;теглене-на-пари-от-банкомат-с-валидни-данни",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Потребителят поставя кредитна/дебитна карта с номер \"asd123\" в банкомата",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Избере сума \"122\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Въведе пин код \"1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Натисне бутона за потвърждение",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Показване на съобщение \"Успешна транзакция\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "asd123",
      "offset": 53
    }
  ],
  "location": "WithdrawalSteps.InsertCard(String)"
});
formatter.result({
  "duration": 690000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "122",
      "offset": 13
    }
  ],
  "location": "WithdrawalSteps.ChooseAmount(String)"
});
formatter.result({
  "duration": 83800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 16
    }
  ],
  "location": "WithdrawalSteps.EnterPin(String)"
});
formatter.result({
  "duration": 4024700,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawalSteps.ClickConfirmButton()"
});
formatter.result({
  "duration": 93500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешна транзакция",
      "offset": 24
    }
  ],
  "location": "WithdrawalSteps.ShowEndMessage(String)"
});
formatter.result({
  "duration": 102000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Теглене на пари от банкомат с невалиден пин код",
  "description": "",
  "id": "теглене-на-пари;теглене-на-пари-от-банкомат-с-невалиден-пин-код",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Потребителят поставя кредитна/дебитна карта с номер \"asd123\" в банкомата",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Избере сума \"222\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Въведе пин код \"1233\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Натисне бутона за потвърждение",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Показване на съобщение \"Невалиден пин код\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "asd123",
      "offset": 53
    }
  ],
  "location": "WithdrawalSteps.InsertCard(String)"
});
formatter.result({
  "duration": 364200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "222",
      "offset": 13
    }
  ],
  "location": "WithdrawalSteps.ChooseAmount(String)"
});
formatter.result({
  "duration": 75000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1233",
      "offset": 16
    }
  ],
  "location": "WithdrawalSteps.EnterPin(String)"
});
formatter.result({
  "duration": 61200,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawalSteps.ClickConfirmButton()"
});
formatter.result({
  "duration": 27000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалиден пин код",
      "offset": 24
    }
  ],
  "location": "WithdrawalSteps.ShowEndMessage(String)"
});
formatter.result({
  "duration": 48900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Теглене на пари от банкомат с недостик на средства",
  "description": "",
  "id": "теглене-на-пари;теглене-на-пари-от-банкомат-с-недостик-на-средства",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Потребителят поставя кредитна/дебитна карта с номер \"asd123\" в банкомата",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Избере сума \"5345434\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Въведе пин код \"1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Натисне бутона за потвърждение",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Показване на съобщение \"Недостик на средства\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "asd123",
      "offset": 53
    }
  ],
  "location": "WithdrawalSteps.InsertCard(String)"
});
formatter.result({
  "duration": 271000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5345434",
      "offset": 13
    }
  ],
  "location": "WithdrawalSteps.ChooseAmount(String)"
});
formatter.result({
  "duration": 59900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 16
    }
  ],
  "location": "WithdrawalSteps.EnterPin(String)"
});
formatter.result({
  "duration": 602900,
  "status": "passed"
});
formatter.match({
  "location": "WithdrawalSteps.ClickConfirmButton()"
});
formatter.result({
  "duration": 44300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Недостик на средства",
      "offset": 24
    }
  ],
  "location": "WithdrawalSteps.ShowEndMessage(String)"
});
formatter.result({
  "duration": 62000,
  "status": "passed"
});
});