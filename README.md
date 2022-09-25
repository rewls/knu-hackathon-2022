# knu-hackathon-2022

## 러너즈
<br>

https://runners-5383d.web.app/

<br>

### 제출 세션 및 주제
- 자유 세션  
- 주제: 문화생활

<br><br>

### 프로젝트 요약
대구 시민들을 즐길 수 있는 여러 행사를 공연, 전시회, 축제로 분류하고 이를 통합하여 여러 행사의 정보를 얻고 예약할 수 있는 통합 웹사이트 구축

<br>
    
### 프로젝트 설명

  - 기획 배경     
   
 많은 인구가 수도권으로 집중되면서 많은 문화 인프라도 수도권에 집중되고 있습니다. 대구도 다른 도시에 비해 열악한 환경입니다. 2020년 전국문화기반시설 총람에 의하면 각 지역 문화시설을 인구 100만명당 문화 시설 수로 단순 환산하면 대구는 36.5개로 전국 17개 시,도 가운데 16위로 최하위를 달성했습니다.   
 <br>
  [관련 기사]  
  http://www.kyongbuk.co.kr/news/articleView.html?idxno=2077450
 
 <br>
 하지만 SNS나 길에 있는 현수막을 살펴보면 대구에서도 다양한 행사가 열리고 있습니다. 그러나 홍보 방식이 제각각이라서 어떤 행사가 언제 어디서 열리는지 모르거나 어떻게 예약해야 하는 지 잘 몰라 시민들이 여러 행사를 잘 즐기지 못하고 있습니다. 이러한 상황에서 대구 시민들의 문화생활의 질을 높이기 위해 대구에서 열리는 여러 행사를 소개하고 예약할 수 있는 웹사이트를 제작하게 되었습니다.
   
  <br> 
  - 기능
      
 1) 대구광역시에서 열리는 다양한 행사를 모아보기     
 엑스코, 이월드, 동성로 등 다양한 장소에서 열리는 행사를 확인할 수 있습니다.  
  
  ![image](https://user-images.githubusercontent.com/87495422/192135206-c0eaaa99-3542-4041-af10-ec77c3f40e9d.png)

  필터와 검색 기능을 활용하여 내가 원하는 행사를 더 빠르게 찾을 수 있습니다.  
    
  ![image](https://user-images.githubusercontent.com/87495422/192135305-9d1f0637-bfc9-4eb4-9fdb-a4f952b641e3.png)

   
 2) 행사의 상세 기능 확인   
 행사를 클릭하면 기간, 시간, 장소, 행사가 열리는 위치를 확인할 수 있습니다.  
 
 ![image](https://user-images.githubusercontent.com/87495422/192135693-0cd70585-c264-4a16-bb5e-ca45055d165a.png)

 
 3) 개인, 기업의 행사 홍보 기능   
 지역 내 기업이나 학교, 개인이 진행하는 행사를 등록하여 홍보하여 지역 커뮤니티를 활성시킬 수 있습니다. 
 
 ![image](https://user-images.githubusercontent.com/87495422/192135584-3d10edea-0b60-406f-8b66-30d6dbc0829c.png)

<br>
 
 #### -  활용 방안 & 기대 효과  
  
이 웹사이트를 통해 시민들은 대구에서 열리는 다양한 행사를 소개받을 수 있고 이를 통해 여러 행사에 참여할 기회를 제공받아 문화생활의 질을 높일 수 있을 겁니다. 또한 시민들은 행사를 예약하기 위해 여러 사이트를 돌아다녀야 할 수고를 덜 수 있을 것으로 기대가 됩니다. 마지막으로 행사를 주최하는 관계자들은 이 웹사이트를 통해 행사를 홍보할 수 있어 좋을 것입니다.

 <br><br>  
  
### 프로젝트에 활용된 기술
1. Firebase 구글 모바일 플랫폼 사용
 - RealTime DataBase :  행사 정보를 실시간으로 데이터베이스에서 불러옵니다. 데이터베이스에는 행사 이름, 주최자, 시작 날짜, 마감 날짜 등 기본 행사 정보가 포함되어 있습니다. 
 - Hosting : firebase 호스팅을 이용해 도메인을 제작하고 배포합니다.
 - Storage : 행사 포스터를 저장하여 DB와 연동시켜줍니다.   
2. 반응형 웹페이지 제작
- BootStrap: 템플릿을 이용하여 기본 뼈대를 제작합니다.
- JQuery : 데이터 베이스의 정보를 실시간으로 불러옵니다.    
3. 구글 지도 기능 사용
구글 API를 받아와 구글 지도를 사용합니다. 

### 유튜브 링크  

https://youtu.be/gwtN2FZ15nw

타임라인  
0:20 검색기능  
0:25 상세페이지  
0:35 행사 추가 신청  
   

