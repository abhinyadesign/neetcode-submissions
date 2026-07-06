class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let ana={}
        let ana1={}
        if(s.length!==t.length){
            return false
        }
        for(let i=0;i<s.length;i++){
            if(!Object.keys(ana).includes(s[i])){
                ana[s[i]]=1
            }else{
ana[s[i]]++
            }
        }

        for(let i=0;i<t.length;i++){
            if(!Object.keys(ana1).includes(t[i])){
                ana1[t[i]]=1
            }else{
ana1[t[i]]++
            }
        }

        for(let i=0;i<s.length;i++){
            if(ana[s[i]]!==ana1[s[i]]){
                return false
            }
        }
        return true


    }
}
