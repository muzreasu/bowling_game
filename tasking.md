1. Given ten rounds are all strike;
   When calculate total score;
   Then the score should be 300.
   
2. Given ten rounds are all spare such as [(1,9),(2,8),(6,4),(1,9),(2,8),(6,4),(1,9),(2,8),(6,4),(3,7)];
   When calculate total score;
   Then the score should be 129.
   
3. Given ten rounds have no strike or spare such as [(1,4),(3,5),(4,4),(2,3),(1,4),(1,4),(3,5),(4,4),(2,3),(1,4)];
   When calculate total score;
   Then the score should be 62.
   
4. Given ten rounds have spare but no strike such as [(4,6),(3,5),(4,4),(2,3),(1,4),(1,4),(3,5),(4,4),(2,3),(1,4)];
   When calculate total score;
   Then the score should be 70.   
   
5. Given ten rounds have strike but no spare such as [(10,0),(3,5),(4,4),(2,3),(1,4),(1,4),(3,5),(4,4),(2,3),(1,4)];
   When calculate total score;
   Then the score should be 75.

6. Given ten rounds have both strike and spare such as [(10,0),(3,5),(4,6),(2,3),(1,4),(1,4),(3,5),(4,4),(2,3),(1,4)];
   When calculate total score;
   Then the score should be 79.
   
7. Given ten rounds and the last round is strike such as [(1,4),(3,5),(4,4),(2,3),(1,4),(1,4),(3,5),(4,4),(2,3),(10,4,5)];
   When calculate total score;
   Then the score should be 76.
   
8. Given ten rounds and the last round is spare such as [(1,4),(3,5),(4,4),(2,3),(1,4),(1,4),(3,5),(4,4),(2,3),(6,4,5)];
   When calculate total score;
   Then the score should be 71.
   
9. Given ten rounds have both strike and spare and the last round is spare such as [(10,0),(3,5),(4,6),(2,3),(1,4),(1,4),(3,5),(4,4),(2,3),(6,4,5)];
   When calculate total score;
   Then the score should be 89.
   
