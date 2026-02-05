public class Solution {
    public bool SumGame(string num) {
        int n=num.Length;
        int leftsum=0,rightsum=0;
        int leftq=0,rightq=0;
        for(int i=0;i<n;i++){
            if(i<n/2){
                if(num[i]=='?')leftq++;
                else leftsum+=num[i]-'0';
            }
            else{
                if(num[i]=='?')rightq++;
                else rightsum+=num[i]-'0';
            }
        }
        if((leftq+rightq)%2==1)
        return true;

        int diff=leftsum-rightsum;
        int qdiff=leftq-rightq;

        return diff != -(qdiff/2)*9;
        
    }
}