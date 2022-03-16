import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";

@Exclude()
export class PrefectureResponseDto {
  @Expose()
  @ApiProperty({ example: 27, description: "都道府県ID" }) // OpenAPI example, description に相当
  readonly id: number;

  @Expose()
  @ApiProperty({ example: 7, description: "都道府県に紐づくエリアID" })
  m_areas_id: number;

  @Expose()
  @ApiProperty({ example: "大阪府", description: "都道府県名" })
  name: string;

  @Expose()
  @ApiProperty({ example: "おおさかふ", description: "都道府県名_ひらがな" })
  name_hiragana: string;

  @Expose()
  @ApiProperty({ example: "オオサカフ", description: "都道府県名_カタカナ" })
  name_katakana: string;

  @Expose()
  @ApiProperty({ example: "osaka", description: "都道府県名_カタカナ" })
  name_roman: string;
}
