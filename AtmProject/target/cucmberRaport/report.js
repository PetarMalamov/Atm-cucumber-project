$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("atm.feature");
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
  "name": "Избере опция \"теглене на пари\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "Избере сума \"122\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Въведе пин код \"1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Натисне бутона за потвърждение",
  "keyword": "And "
});
formatter.step({
  "line": 9,
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
  "location": "Steps.InsertCard(String)"
});
formatter.result({
  "duration": 203448800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "теглене на пари",
      "offset": 14
    }
  ],
  "location": "Steps.ChooseOption(String)"
});
formatter.result({
  "duration": 79200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "122",
      "offset": 13
    }
  ],
  "location": "Steps.ChooseAmount(String)"
});
formatter.result({
  "duration": 76600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 16
    }
  ],
  "location": "Steps.EnterPin(String)"
});
formatter.result({
  "duration": 90800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.PressConfirmButton()"
});
formatter.result({
  "duration": 141200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Успешна транзакция",
      "offset": 24
    }
  ],
  "location": "Steps.ShowEndMessage(String)"
});
formatter.result({
  "duration": 12920700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Теглене на пари от банкомат с невалиден пин код",
  "description": "",
  "id": "теглене-на-пари;теглене-на-пари-от-банкомат-с-невалиден-пин-код",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Потребителят поставя кредитна/дебитна карта с номер \"asd123\" в банкомата",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Избере опция \"теглене на пари\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Избере сума \"222\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Въведе пин код \"1233\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Натисне бутона за потвърждение",
  "keyword": "And "
});
formatter.step({
  "line": 17,
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
  "location": "Steps.InsertCard(String)"
});
formatter.result({
  "duration": 251900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "теглене на пари",
      "offset": 14
    }
  ],
  "location": "Steps.ChooseOption(String)"
});
formatter.result({
  "duration": 70800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "222",
      "offset": 13
    }
  ],
  "location": "Steps.ChooseAmount(String)"
});
formatter.result({
  "duration": 81600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1233",
      "offset": 16
    }
  ],
  "location": "Steps.EnterPin(String)"
});
formatter.result({
  "duration": 52100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.PressConfirmButton()"
});
formatter.result({
  "duration": 32100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Невалиден пин код",
      "offset": 24
    }
  ],
  "location": "Steps.ShowEndMessage(String)"
});
formatter.result({
  "duration": 57400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Теглене на пари от банкомат с недостик на средства",
  "description": "",
  "id": "теглене-на-пари;теглене-на-пари-от-банкомат-с-недостик-на-средства",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "Потребителят поставя кредитна/дебитна карта с номер \"asd123\" в банкомата",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Избере опция \"теглене на пари\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Избере сума \"2221233\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Въведе пин код \"1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Натисне бутона за потвърждение",
  "keyword": "And "
});
formatter.step({
  "line": 25,
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
  "location": "Steps.InsertCard(String)"
});
formatter.result({
  "duration": 655400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "теглене на пари",
      "offset": 14
    }
  ],
  "location": "Steps.ChooseOption(String)"
});
formatter.result({
  "duration": 60800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2221233",
      "offset": 13
    }
  ],
  "location": "Steps.ChooseAmount(String)"
});
formatter.result({
  "duration": 399400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 16
    }
  ],
  "location": "Steps.EnterPin(String)"
});
formatter.result({
  "duration": 57900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.PressConfirmButton()"
});
formatter.result({
  "duration": 34500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Недостик на средства",
      "offset": 24
    }
  ],
  "location": "Steps.ShowEndMessage(String)"
});
formatter.result({
  "duration": 49600,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Смяна на пин код",
  "description": "",
  "id": "теглене-на-пари;смяна-на-пин-код",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "Потребителят поставя кредитна/дебитна карта с номер \"asd123\" в банкомата",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Избере опция \"Смяна на пин код\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Въведе пин код \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Въведе нов пин код \"12333\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Натисне бутона за потвърждение",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Показване на съобщение \"Смяната на паролата беше успешна\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "asd123",
      "offset": 53
    }
  ],
  "location": "Steps.InsertCard(String)"
});
formatter.result({
  "duration": 234500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Смяна на пин код",
      "offset": 14
    }
  ],
  "location": "Steps.ChooseOption(String)"
});
formatter.result({
  "duration": 53600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 16
    }
  ],
  "location": "Steps.EnterPin(String)"
});
formatter.result({
  "duration": 52500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12333",
      "offset": 20
    }
  ],
  "location": "Steps.EnterNewPin(String)"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.PressConfirmButton()"
});
formatter.result({
  "duration": 56800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Смяната на паролата беше успешна",
      "offset": 24
    }
  ],
  "location": "Steps.ShowEndMessage(String)"
});
formatter.result({
  "duration": 60200,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Смяна на пин код , когато стария пин е същия като новия",
  "description": "",
  "id": "теглене-на-пари;смяна-на-пин-код-,-когато-стария-пин-е-същия-като-новия",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "Потребителят поставя кредитна/дебитна карта с номер \"asd123\" в банкомата",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Избере опция \"Смяна на пин код\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Въведе пин код \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Въведе нов пин код \"1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Натисне бутона за потвърждение",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Показване на съобщение \"Смяната на паролата беше неуспешна,не може новата и старата парола да са еднакви\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "asd123",
      "offset": 53
    }
  ],
  "location": "Steps.InsertCard(String)"
});
formatter.result({
  "duration": 257500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Смяна на пин код",
      "offset": 14
    }
  ],
  "location": "Steps.ChooseOption(String)"
});
formatter.result({
  "duration": 65500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 16
    }
  ],
  "location": "Steps.EnterPin(String)"
});
formatter.result({
  "duration": 112500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 20
    }
  ],
  "location": "Steps.EnterNewPin(String)"
});
formatter.result({
  "duration": 82100,
  "status": "passed"
});
formatter.match({
  "location": "Steps.PressConfirmButton()"
});
formatter.result({
  "duration": 35000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Смяната на паролата беше неуспешна,не може новата и старата парола да са еднакви",
      "offset": 24
    }
  ],
  "location": "Steps.ShowEndMessage(String)"
});
formatter.result({
  "duration": 314300,
  "status": "passed"
});
});