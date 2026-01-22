/* Write your T-SQL query statement below */
select p.FirstName,p.LastName,a.City,a.State
from Person p Left Join Address a on p.PersonId=a.PersonId;