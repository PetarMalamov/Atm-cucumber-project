import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "Features", plugin = { "pretty", "html:target/cucmberRaport" }, monochrome = true)
public class AtmTester {
    // file:///C:/Users/User/eclipse-workspace/cucumber-project-uni/target/cucmberRaport/index.html
}
