@isTest
private class TestacController{

	@testSetup static void setup(){

		Account accountObj = new Account (
			Website = 'www.google.com', 
			Industry ='Agriculture', 
			AnnualRevenue = 1.1, 
			Rating ='Hot', 
			Name = 'test value'
		);
		insert accountObj;
		 
	}

	
}