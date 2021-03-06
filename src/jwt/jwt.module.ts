import { Global, Module } from "@nestjs/common"
import { JwtModule } from "@nestjs/jwt"

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_KEY + "",
      signOptions: {
        expiresIn: "60s",
      },
    }),
  ],
  exports: [JwtModule],
})
export class CoreModule {}
