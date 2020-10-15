const nums1 = [7, 13, 5, 1, 99];
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nums3 = [11, 45, 2, 5, 4, 4];
function arraySum(nums1){
let sum = 0;
for(var i = 0; i < nums1.length; i++){
    sum += nums1[i];
    }
    console.log('Сумма чисел масива ['+nums1+'] = '+ sum )
}
arraySum(nums1)
arraySum(nums2)
arraySum(nums3)