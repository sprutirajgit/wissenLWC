public with sharing class ContactSearch {
    @AuraEnabled(Cacheable=true)
    public static List<Contact> getContacts(String name,String Gender){
        String key, whereClause ='';
        String[] criteria = new List<String>{};
        if(name !=null){
                key ='%'+name+'%';
                criteria.add('Name LIKE: key');
            }
            if(Gender != null){
                criteria.add('Gender__c =:Gender');
            }
            if(criteria.size()>0){
                whereClause =  'WHERE ' + String.join(criteria, ' AND ');
            }
        String query = 'SELECT Id, Name,Gender__c,avatar__c,Department FROM Contact ' + whereClause + ' WITH SECURITY_ENFORCED' + ' ORDER BY Name';
        return Database.query(query);
    }

}
