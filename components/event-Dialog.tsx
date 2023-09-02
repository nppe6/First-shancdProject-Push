
// 引入button card dialog模块
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
export function EventDialog() {
    return (
        // 主体区域位dialog
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Click out</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[385px]">
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center">Share a Auttoning</DialogTitle>
                    <DialogTitle className="flex justify-center items-center">Share Autton</DialogTitle>
                    <DialogDescription className="flex justify-center items-center">
                        Make changes to your profile here.
                    </DialogDescription>
                </DialogHeader>
                {/* 卡片组模块 定义中间部分  */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex justify-center items-center">Hello ever body</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="flex justify-center items-center">Body Content</p>
                    </CardContent>
                    <CardFooter className="flex justify-center items-center">
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
                {/* 区别与卡片组外的一行文字 */}
                <p className="flex justify-center items-center"> Your hello a is Numberheihei</p>

                <DialogFooter className="flex justify-between">
                    <Button variant="outline" className="w-20">click</Button>
                    <Button className="w-60">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}