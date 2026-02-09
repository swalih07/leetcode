/* Write your T-SQL query statement below */
select distinct author_id as Id
from Views
where author_id = viewer_id
order by author_id