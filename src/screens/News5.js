import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView } from "react-native";
import {colors} from "react-native-elements"
import Header from "../components/Header";
import Icon from "react-native-vector-icons/Entypo"

export default function News5({navigation}) {
  return (
  <View>
      <ScrollView>
      <Header title="Bài viết" type="arrow-left" navigation={navigation}/>
      <View>
      <Text style={{fontSize:27,color:colors.black,fontWeight:"bold"}}>Bài báo cáo đặc biệt phần 1: Câu chuyện của Bs Steve Kopecky</Text>
      <Text style={styles.title3}>Câu chuyện dưới đây được kể bởi Steve Kopecky - một vị bác sĩ tim mạch - về chính cuộc đời của mình. Nhờ những trải nghiệm “không mấy vui” trong cuộc đời mình, ông đã tích lũy được những bài học cho chính bản thân để có một sức khỏe tốt và sống cuộc sống ý nghĩa hơn.</Text>
      <Image
      source={{uri:"https://www.medigoapp.com/uploads/Cau_chuyen_cua_Steve_Kopecky_50c55cef5d.jpg"}}
      style={{width:400,height:300,marginTop:10}}
      />
      <Text style={styles.title3}>Tôi tên là Steve Kopecky. Tôi là một bác sĩ tim mạch ở Mayo Clinic. Ở tuổi 39, tôi đang phải trải qua những cuộc phẫu thuật và hàng tháng hóa trị để điều trị ung thư – lần ung thư thứ 2 trong cuộc đời mình. Lần đầu tiên tôi biết mình phải đối mặt với ung thư là khi tôi đang học ở trường y, khi đó tôi cũng đã trải qua cuộc phẫu thuật và xạ trị. Một thời gian sau khi tôi hoàn thành việc điều trị cho bệnh ung thư – vào sinh nhật thứ 40 của mình – bác sĩ ung thư của tôi đã nói với tôi rằng, kết quả CT scan tìm thấy khối u còn sót lại trong bụng và tôi sẽ cần phải tiếp tục thực hiện phẫu thuật trong thời gian tới.</Text>
      <Text style={styles.title3}>Chiến đấu với với lần ung thư thứ hai này đã làm tôi phải nghĩ đến đến sự tồn tại của mình. Vào lúc này, tôi mới hiểu tại sao người ta hay nói rằng: “Một người khỏe mạnh có thể có rất nhiều điều ước, nhưng một người đang mắc bệnh chỉ có một”. Ngay thời điểm đó, vào sinh nhật thứ 40 của mình, tôi đã quyết định rằng nếu tôi đủ may mắn để hồi phục và có thể sống sót, tôi sẽ làm tất cả những gì có thể để đảm bảo mình không bao giờ bị ung thư “quấy rầy” nữa. Điều này thôi thúc tôi cố gắng học và tìm hiểu những gì mình có thể làm để ngăn ngừa ung thư trong tương lai, cũng như các căn bệnh nguy hiểm khác.</Text>
      <Text style={styles.title3}>Vào thời điểm đó, tôi phải quay cuồng trong việc làm một bác sĩ tim mạch, điều trị các cơn đau tim và làm một số can thiệp như thông tắc mạch vành, điều đó có nghĩa rằng công việc hằng ngày của tôi sẽ thiên về mặt điều trị, chứ không phải phòng ngừa bệnh. Học cách làm sao để phòng ngừa bệnh là những kiến thức mới mẻ đối với tôi. Và những gì tôi đã học được trong quá trình này thật sự làm tôi ngạc nhiên. Tôi phát hiện ra rằng mặc dù tôi có thể mắc ung thư những hai lần trong cuộc đời mình, nhưng các bệnh về tim mạch rất có thể sẽ là nguyên nhân khiến tôi tử vong trong tương lai. Tôi cũng phát hiện ra rằng sáu thói quen và lối sống dẫn đến một “trái tim bệnh tật” và cũng là nguyên nhân chính của các bệnh phổ biến khác hiện tại như: ung thư, bệnh Alzheimer, đái tháo đường và có thể nhiều hơn nữa.</Text>
      <Text style={styles.title3}>Cuối cùng, tôi nắm bắt được những vấn đề mà hầu hết những người ở độ tuổi 40 – cũng như tôi không muốn đối mặt, đó là thấy điểm cuối của cuộc đời mình và không thể tránh khỏi cái chết. Tôi thấy rằng về cơ bản có bốn mô hình sức khỏe, hoặc có thể hơn, mà một người có thể sẽ trải qua trong cuộc đời: đột tử trong vòng một giờ, ngã bệnh và chết trong vòng một vài tháng, suy yếu trong một khoảng thời gian dài và chết hoặc suy cơ quan. Hai năm sau thường có nghĩa là vài năm, nếu không phải hàng chục năm của bệnh tật. Vì vậy, sáu thói quen xấu hàng ngày có thể là nguyên nhân của các bệnh mãn tính dẫn đến bốn mô hình bệnh tật như trên trong suốt cuộc đời. Tôi nhận ra rằng nếu tôi đủ may mắn để hoàn toàn khỏi bệnh trong lần ung thư thứ hai này, tôi muốn có một sức khỏe tốt nhất, miễn là tôi có thể làm cho phần còn lại của cuộc đời mình.</Text>
      <Text style={styles.title1}>Bốn mô hình của cái chết</Text>
      <Text style={styles.title3}>Có bốn cách phổ biến mà cuộc sống của một người có thể kết thúc được trình bày dưới đây. Ngoài ra, có một cách ít phổ biến hơn – nhưng mọi người có thể thích hơn. Đó là sống trong sự kiểm soát khả năng thể chất và khỏe mạnh lâu nhất có thể cho đến khi suy yếu nhanh chóng và chết – hoặc chết mà ít bị suy yếu. Và cách hiệu quả nhất để đạt được điều này là rèn luyện những thói quen xuyên suốt cuộc đời – dinh dưỡng tốt, vận động nhiều, nghỉ ngơi đầy đủ, giảm căng thẳng, hạn chế bia rượu, không hút thuốc và giữ cân nặng phù hợp.</Text>
      <Icon
         name="dot-single"
         color={colors.black}
         size={30}
      />
      <Text style={styles.title2}>Đột tử. Các chức năng vật lý vẫn bình thường cho đến khi xảy ra đột tử. Tình trạng này có thể xảy ra khi tuổi đời còn rất trẻ, ví dụ như tai nạn, hoặc cái chết do tình trạng loạn nhịp tim.</Text>
      <Icon
         name="dot-single"
         color={colors.black}
         size={30}
      />
      <Text style={styles.title2}>Bệnh nan y. Các chức năng vật lý vẫn bình thường cho đến khi phát bệnh, ví dụ như ung thư. Sức khỏe giảm sút trong những tháng cuối đời.</Text>
      <Icon
         name="dot-single"
         color={colors.black}
         size={30}
      />
      <Text style={styles.title2}>Suy cơ quan. Chức năng vật lý dao động lên xuống trong nhiều năm trước khi chết do suy các cơ quan.</Text>
      <Icon
         name="dot-single"
         color={colors.black}
         size={30}
      />
      <Text style={styles.title2}>Suy yếu. Các chức năng vật lý giảm sút trong nhiều năm theo sự tăng lên của tuổi tác.</Text>
      <Text style={styles.title1}>Một sự thay đổi “khổng lồ”</Text>
      <Text style={styles.title3}>Hơn một thế kỷ trước, mối đe dọa sức khỏe lớn nhất của con người là các bệnh truyền nhiễm. Những bệnh này lây lan từ người này sang người khác, đặc biệt ở những vùng nước bị ô nhiễm hoặc lây qua không khí. Các nguyên nhân hàng đầu gây tử vong ở Hoa Kỳ trong thời kỳ đầu thế kỷ 20 là bệnh cúm, viêm phổi, bệnh lao (phong) và nhiễm trùng đường tiêu hóa.</Text>
      <Text style={styles.title3}>Việc chưa có vắc xin, nghèo nàn về ý thức vệ sinh cũng như những kiến thức về các biện pháp để ngăn ngừa hoặc điều trị những căn bệnh này là quá thiếu thốn. Đó là một tiền đề để “cơn bão các bệnh lây lan” hoành hành và gây tử vong cho vô số người. Bệnh tim cũng lọt vào top 10 nguyên nhân gây ra cái chết ở Hoa Kỳ vào năm 1990. Nhưng những bệnh này chủ yếu là bệnh tim với nguyên nhân đầu tiên là do nhiễm trùng dẫn đến các vấn đề ở van (ở Việt Nam hay gọi là bệnh thấp khớp).</Text>
      <Text style={styles.title3}>Trong thế kỷ trước, y học đã có sự phát triển, các chương trình tiêm chủng được thực hiện, việc phát triển các kháng sinh cũng như hệ thống giáo dục sức khỏe cộng đồng cũng đã tiến bộ hơn rất nhiều. Điều này đã giúp ích trong việc cải thiện sức khỏe cộng đồng, giảm tác động của sự lây lan các bệnh truyền nhiễm. Tuy nhiên, song song với sự phát triển của xã hội, người ta lại xuất hiện nhiều nhu cầu hơn và có những thói quen khác như hút thuốc và lái xe ô tô – điều này có nghĩa là số người chết vì ung thư phổi và tai nạn xe hơi cũng mặc nhiên tăng lên.</Text>
      <Text style={styles.title3}>Những tiến bộ trong công nghệ và thử nghiệm đã khám phá ra những kiến thức mới về bệnh tật và việc điều trị cũng trở nên tốt hơn đối với các bệnh đã có trước đó. Mặt khác, sự tiến bộ vượt bậc trong sản xuất và công nghiệp cũng ảnh hưởng đến các hoạt động hàng ngày của con người, chế độ ăn và kết quả của những điều này là sức khỏe của chúng ta.</Text>
      <Text style={styles.title3}>Thay vì đi bộ đến cửa hàng, hầu hết bây giờ chúng ta lái xe đến đó. Thay vì một công việc đòi hỏi lao động chân tay hoặc phải yêu cầu về mặt thể chất, một số lượng lớn chúng ta dành hầu hết thời gian làm việc để ngồi trước màn hình máy vi tính. Một số người phải làm ca đêm, hoặc tính chất công việc phải thực hiện vào ban đêm, sẽ làm thay đổi cả thói quen sinh hoạt, cách ăn uống ngủ nghỉ cũng như là nhịp sinh học của cơ thể.</Text>
      <Text style={styles.title3}>Tổ tiên của chúng ta từng sống dựa vào “cây cỏ”, họ kiếm ăn và săn bắt động vật hoang dã. Sự ra đời của nông nghiệp và ứng dụng công nghệ hiện đại vào sản xuất đã làm cho việc tiếp cận với thực phẩm trở nên dễ dàng hơn. Kết quả là, chế độ ăn của chúng ta đã thay đổi, chúng ta có sữa, ngũ cốc, đường tinh luyện, dầu thực vật tinh luyện, muối và thịt mỡ. Thực phẩm được chế biến một cách hiện đại, thuận tiện cho người tiêu dùng và không mấy tốn kém, nhưng thực ra đã mất đi hầu hết những “phẩm chất tốt” của thực phẩm chưa qua chế biến.</Text>
      <Text style={styles.title3}>Năm 1970, chỉ 0,2% lượng đường chúng ta tiêu thụ là từ si-rô ngô nhiều fructose. Đến năm 2000, các chất làm ngọt đã qua xử lý – chiếm một phần ba lượng đường trong chế độ ăn uống của chúng ta. Và điều này cũng xảy ra tương tự đối với chất béo. Trong những năm ở thế kỷ 20, việc chúng ta sử dụng dầu thực vật và bơ thực vật tăng lên lần lượt là 130% và 410%. Trong khi những thay đổi về cách chúng ta “ăn và làm” phản ánh một xã hội thịnh vượng và tuổi thọ cao, vẫn luôn tồn tại song song những khía cạnh kém may mắn hơn.</Text>
      <Text style={styles.title3}>Công nghệ phát triển với tốc độ nhanh chóng, nhưng cơ thể của chúng ta về mặt sinh học vẫn chưa bắt kịp để thay đổi theo lối sống hiện đại. Tiêu thụ quá nhiều thực phẩm chế biến, thiếu hụt hoạt động thể chất, thiếu những giấc ngủ ngon, luôn trong tình trạng căng thẳng và sự ô nhiễm của môi trường là tất cả những thứ đang gây ra các vấn đề về sức khỏe hiện nay, chẳng hạn như các bệnh mãn tính đã được giới thiệu ở trên và bây giờ là nguyên nhân hàng đầu của cái chết.</Text>
      <Text style={styles.title1}>Làm thế nào mà các bệnh mãn tính hình thành và phát triển trong cơ thể bạn?</Text>
      <Text style={styles.title3}>Hầu hết chúng ta được sinh ra với một sức khỏe tương đối tốt. Trừ khi xuất hiện một căn bệnh nào đó khi còn nhỏ, chúng ta hầu như bước đến độ tuổi thanh thiếu niên mà không có quá nhiều “chuyến viếng thăm” bác sĩ. Những người dưới 45 tuổi thường tử vong bởi những nguyên nhân không thể kiểm soát được, ví dụ như tai nạn. Có lẽ tôi có một chút ngoại lệ khi phát triển bệnh ung thư từ khi còn trẻ.</Text>
      <Text style={styles.title3}>Tuy nhiên, khi già đi, sức khỏe của chúng ta bị ảnh hưởng bởi các bệnh mãn tính về tim, về mạch máu, đái tháo đường, sa sút trí tuệ và những căn bệnh khác nữa đang vô cùng phổ biến trong cuộc sống hiện nay. Cũng có rất nhiều bệnh xuất hiện do tình trạng viêm mạn tính trong cơ thể.</Text>
      <Text style={{marginTop:20,fontSize:17,color:colors.black}}>Nguồn tài liệu: Mayo Clinic</Text>
      <Text style={{marginTop:15,fontSize:17,color:colors.black}}>Biên dịch: DS. Nguyễn Phạm Quỳnh Hoa</Text>
      </View>
      </ScrollView>
  </View>
 )}


const styles=StyleSheet.create({
    title1:{
      marginTop:7,
      fontSize:22,
      color:colors.black,
      fontWeight:"bold"
    },
    title2:{
      textAlign:"left",
      marginTop:-26,
      marginLeft:25,
      fontSize:17,
      color:colors.black,
    },
    title3:{
    marginTop:7,
    fontSize:17,
    color:colors.black
    },
    title4:{
        marginTop:10,
        fontSize:18,
        color:colors.black,
        fontWeight:"bold"
    }
  })